import{TbBrandDaysCounter} from "react-icons/tb";
import{GrThreeDEffects} from "react-icons/gr"
import{TbMinimize} from "react-icons/tb";
import{TiWeatherSnow} from "react-icons/ti";
export const navbar=[
    {
        route:"/",
        name:"Counter",
        icons:<TbBrandDaysCounter/>,
    },
    {
        route:"/useeffect",
        name:"Useeffect",
        icons:<GrThreeDEffects/>,
    },
    {
        route:"/bmi",
        name:"BMI",
        icons:<TbMinimize/>,
    },
    {
        route:"/weather",
        name:"Weather Aplication",
        icons:<TiWeatherSnow/>
    },
];