import Container from "../Global/Container";
import { motion } from "framer-motion";

const ResumeTemplates = () => {
  const resumeTemplates = [
    "https://marketplace.canva.com/EAFszEvkM50/2/0/1131w/canva-simple-professional-cv-resume-36p5VOFVDxY.jpg",
    "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
    "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
  ];
  return (
    <Container className="bg-accent-color py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="lg:text-3xl text-xl font-bold text-primary-color">
          🚀 Professional Resume Templates
        </h1>
        <p className="lg:text-sm text-xs text-gray-800 my-2">
          Choose from a variety of expertly designed resume templates that help
          you stand out. Customize them to match your style and land your dream
          job!
        </p>
      </motion.div>
    </Container>
  );
};

export default ResumeTemplates;
