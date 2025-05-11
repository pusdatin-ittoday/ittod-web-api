const prisma = require("../prisma.js");
const {uploadFileToR2, getFileFromR2} = require("./r2.service");

const editUserProfile = async ({
    full_name,
    birth_date,
    phone_number,
    jenis_kelamin,
    id_line,
    id_discord,
    id_instagram,
    pendidikan,
    pendidikan_lainnya,
    nama_sekolah,
    ktm,
    user_id
}) => {
    const user = await prisma.user.
};
