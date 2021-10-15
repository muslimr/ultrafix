import {Alerts} from "../plugins/Alerts";
import {Api} from "../plugins/Api";


export async function sendDataToClient (state, setState) {
    setState({loading: true});

    let result = await Api.post('contactStore', state.dataToSend);

    if (result) {
        if (result.status === 'success'){
            await Alerts.successModal(result.description)
            setState({
                success: result.description,
                loading: false,
            });
        }else{
            await Alerts.errorModal(result.description)
            setState({
                error: result.description,
                loading: false,
            });
        }
    }
}
