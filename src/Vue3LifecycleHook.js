import { onBeforeUnmount } from 'vue'
import { Lifecycle } from 'prhttp/lifecycle.js'

export function bindVue3Lifecycle(httpClient) {
    let lifecycle = new Lifecycle()
    onBeforeUnmount( () => {
        lifecycle.setState(Lifecycle.STATE.BEFORE_UNMOUNTED)
        if(httpClient) {
            httpClient.unbindLifecycle(lifecycle)
        }
    })
    
    if(httpClient) {
        httpClient.bindLifecycle(lifecycle)
    }
}