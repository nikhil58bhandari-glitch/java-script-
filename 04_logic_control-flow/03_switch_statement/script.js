const d = new Date(2026, 1, 10, 13, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month){
    case 1:
    console.log('It is january');
    break;

    case 2:
        console.log('it is february');
        break;

        case 3:
            console.log('it is march');
            break;

            case 4:
            console.log('it is april');
            break;

            case 5:
            console.log('it is may');
            break;

            case 6:
            console.log('it is june');
            break;

            case 7:
            console.log('it is july');
            break;

            case 8:
            console.log('it is august');
            break;

            case 9:
            console.log('it is september');
            break;

            case 10:
            console.log('it is october');
            break;

            case 11:
            console.log('it is november');
            break;

            default:
            console.log('it is December');

}

switch (true) {
    case hour < 12:
        console.log('good Morning');
        break;
        case hour < 18:
            console.log('good afternoon');
            break;
            default:
                console.log('good Night');
}