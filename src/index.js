import './styles/main.scss'

import iconPaperImport from './assets/icon-paper.svg';
import iconScissorsImport from './assets/icon-scissors.svg';
import iconRockImport from './assets/icon-rock.svg';


const iconPaper = document.querySelector('.paper');
iconPaper.src = iconPaperImport;

const iconScissors = document.querySelector('.scissors');
iconScissors.src = iconScissorsImport;

const iconRock = document.querySelector('.rock');
iconRock.src = iconRockImport;