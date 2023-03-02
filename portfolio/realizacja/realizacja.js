import "../../scss/styles.scss";
import PageHeader from "../../components/Header";
import PageFooter from "../../components/Footer";
import { Breadcrumb } from "../../breadcrumb";

const breadcrumb = new Breadcrumb();

const video = document.querySelector(".realizacja-container-video");
video.loop = true;
