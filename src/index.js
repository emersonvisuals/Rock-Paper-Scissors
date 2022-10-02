import './styles/main.scss'

import iconPaperImport from './assets/icon-paper.svg';
import iconScissorsImport from './assets/icon-scissors.svg';
import iconRockImport from './assets/icon-rock.svg';
import triangleBackground from './assets/bg-triangle.svg';
import rulesImport from './assets/image-rules.svg';
import closeImport from './assets/icon-close.svg';


const iconPaper = document.querySelector('.paper');
iconPaper.src = iconPaperImport;

const iconScissors = document.querySelector('.scissors');
iconScissors.src = iconScissorsImport;

const iconRock = document.querySelector('.rock');
iconRock.src = iconRockImport;

const rules = document.querySelector('.rulesDiagram');
rules.src = rulesImport;

const close = document.querySelector('.close');
close.src = closeImport;