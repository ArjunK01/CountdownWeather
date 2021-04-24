import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
let chooseIcon = (type) => {
    switch (type) {
        case "Clear":
            return (<WbSunnyIcon />)

        case "Clouds":
            return (<CloudIcon />)

        case "Rain":
            return (<InvertColorsIcon />)


    }
}

export default chooseIcon