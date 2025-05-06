const fileSchema =  require( "../validators/fileValidationSchema.js");
const prisma = require("../prisma");

const validateFile = (req, res, next) => {
    const { error } = fileSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

const isMemberOfTeam = async (req,res,next) => {
    const {team_id} = req.body;
    const user_id = req.user.id;

    const result = await prisma.team_member.findFirst({where: {user_id, team_id}})
    if (!result) {
        return res.status(403).json({error: "You are not in this team!"})
    }
    next();
}
module.exports = {isMemberOfTeam,validateFile};
