const { describe, it } = require("node:test");
const assert = require("node:assert");
const { validatePaymentProofFile } = require("../src/services/event-payment.service");

describe("Workshop Payment Service Validations", () => {
    it("should throw error if user_id is missing", () => {
        assert.throws(
            () => {
                validatePaymentProofFile({
                    user_id: null,
                    payment_proof: {
                        buffer: Buffer.from("dummy"),
                        originalname: "proof.png",
                        mimetype: "image/png",
                    },
                });
            },
            (err) => err.status === 400 && err.message === "user_id is required."
        );
    });

    it("should throw error if payment_proof is missing", () => {
        assert.throws(
            () => {
                validatePaymentProofFile({
                    user_id: "user-123",
                    payment_proof: null,
                });
            },
            (err) => err.status === 400 && err.message === "payment_proof file is required."
        );
    });

    it("should throw error if mimetype is not allowed", () => {
        assert.throws(
            () => {
                validatePaymentProofFile({
                    user_id: "user-123",
                    payment_proof: {
                        buffer: Buffer.from("dummy"),
                        originalname: "proof.exe",
                        mimetype: "application/x-msdownload",
                    },
                });
            },
            (err) => err.status === 400 && err.message.includes("Invalid file type")
        );
    });

    it("should pass for valid jpeg, png, webp, and pdf files", () => {
        const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "application/pdf"];
        for (const mimetype of validTypes) {
            const result = validatePaymentProofFile({
                user_id: "user-123",
                payment_proof: {
                    buffer: Buffer.from("dummy"),
                    originalname: "proof.png",
                    mimetype,
                },
            });
            assert.strictEqual(result, true);
        }
    });
});
