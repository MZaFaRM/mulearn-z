import KKEMAuth from "../components/Auth";
import Navbar from "../components/Navbar";
import SkillExpress from "../components/SkillExpress";
import { useSearchParams } from "react-router-dom";
import styles from "./KKEmLanding.module.css";
/**
 * Landing page for KKEM
 */
export default function Landing() {
    const [searchParams] = useSearchParams();
    const dwms_id = searchParams.get("dwms_id");
    return (
        <>
            <Navbar />
            {dwms_id && (
                <section id="muId" className={styles.muidSection}>
                    <KKEMAuth dwmsId={dwms_id} />
                    <p className={styles.muidSectionText}>
                        To get started, please enter your{" "}
                        <strong>µLearn ID</strong>. If you don't have a µLearn
                        ID yet, click the button below to visit the{" "}
                        <strong>µLearn website and create one</strong>.
                    </p>
                    <a href="#" className={styles.muidLink}>
                        Still without a Mu-Id? Grab one now
                    </a>
                </section>
            )}
            <SkillExpress />
        </>
    );
}
