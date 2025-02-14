import { Groth16Proof } from "@zk-kit/groth16"
import { PackedProof } from "./types"

/**
 * Unpacks a proof into its original form.
 * @param proof The proof compatible with EddsaProof.
 * @returns The proof compatible with SnarkJS.
 */
export default function unpackProof(proof: PackedProof): Groth16Proof {
    return {
        pi_a: [proof[0], proof[1]],
        pi_b: [
            [proof[3], proof[2]],
            [proof[5], proof[4]]
        ],
        pi_c: [proof[6], proof[7]],
        protocol: "groth16",
        curve: "bn128"
    }
}
