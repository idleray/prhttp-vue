import { Lifecycle } from 'prhttp/lifecycle.js'

export function lifecycleMixin(httpClient) {
    return {
        data() {
            return {
                lifecycle: new Lifecycle()
            }
        },

        created() {
            if(httpClient) {
                httpClient.bindLifecycle(this.lifecycle)
            }
        },
    
        beforeDestroy() {
            console.log("mixin beforeDestroy")
            this.lifecycle.setState(Lifecycle.STATE.BEFORE_UNMOUNTED)
            if(httpClient) {
                httpClient.unbindLifecycle(this.lifecycle)
            }
        }
    }
}