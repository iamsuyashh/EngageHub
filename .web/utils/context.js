import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.user_credentials": {"password": "password", "username": ""}, "state.create_event_data": {"checked_checked": true, "form_data": {}}, "state.register_data": {"form_data": {}}, "state.my_param": {"current_event": "TantraUtsav", "event_param": "", "getEvent": "TantraUtsav", "new_event": ""}, "state.event_state": {"eventName": ""}, "state.event_form_data1": {"date": "", "description": "", "form_data": {}, "header": "", "link": "", "location": "", "redirect": "", "registerd_users": {}, "time": "", "url": "", "venue": ""}, "state.life_stream_controller": {"link": "https://www.youtube.com/embed/x7JMGS0u8Do?si=FNFXJyssfDks-ea4&amp;controls=0;autoplay;", "text": "https://www.youtube.com/embed/x7JMGS0u8Do?si=FNFXJyssfDks-ea4&amp;controls=0;autoplay;", "video": {"link": "https://www.youtube.com/embed/x7JMGS0u8Do?si=FNFXJyssfDks-ea4&amp;controls=0;autoplay;"}}, "state.login_data": {"form_data": {}, "is_logged_in": ""}, "state.local_storage_state": {"l1": "", "l2": "l2 default", "l3": ""}, "state.upcoming_event_data": {"form_data": {}}, "state.global_state": {"eventName": null}, "state.router_state": {}, "state.register_event_data": {"form_data": {}}, "state.register_form_data": {"form_data": {}}, "state.carousel_state": {"current_image_index": 0, "images": ["https://i.ibb.co/LtXsngP/ielts.jpg", "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]}, "state.user_form_data": {"email": ""}, "state.textfield_controlled": {"link": "https://youtu.be/hvVGFVUadvA?feature=shared", "text": "https://youtu.be/hvVGFVUadvA?feature=shared", "video": {"link": "https://youtu.be/hvVGFVUadvA?feature=shared"}}, "state.hide_form_state": {"show": true}, "state.form_data": {"form_data": {}}, "state.client_storage_state": {"login_status": ""}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__user_credentials: createContext(null),
  state__create_event_data: createContext(null),
  state__register_data: createContext(null),
  state__my_param: createContext(null),
  state__event_state: createContext(null),
  state__event_form_data1: createContext(null),
  state__life_stream_controller: createContext(null),
  state__login_data: createContext(null),
  state__local_storage_state: createContext(null),
  state__upcoming_event_data: createContext(null),
  state__global_state: createContext(null),
  state__router_state: createContext(null),
  state__register_event_data: createContext(null),
  state__register_form_data: createContext(null),
  state__carousel_state: createContext(null),
  state__user_form_data: createContext(null),
  state__textfield_controlled: createContext(null),
  state__hide_form_state: createContext(null),
  state__form_data: createContext(null),
  state__client_storage_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"state.login_data.is_logged_in": {"name": "is_logged_in", "path": "/", "sameSite": "lax"}}, "local_storage": {"state.user_credentials.username": {}, "state.user_credentials.password": {}, "state.local_storage_state.l1": {}, "state.local_storage_state.l2": {}, "state.local_storage_state.l3": {"name": "l3"}, "state.client_storage_state.login_status": {}}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__user_credentials, dispatch_state__user_credentials] = useReducer(applyDelta, initialState["state.user_credentials"])
  const [state__create_event_data, dispatch_state__create_event_data] = useReducer(applyDelta, initialState["state.create_event_data"])
  const [state__register_data, dispatch_state__register_data] = useReducer(applyDelta, initialState["state.register_data"])
  const [state__my_param, dispatch_state__my_param] = useReducer(applyDelta, initialState["state.my_param"])
  const [state__event_state, dispatch_state__event_state] = useReducer(applyDelta, initialState["state.event_state"])
  const [state__event_form_data1, dispatch_state__event_form_data1] = useReducer(applyDelta, initialState["state.event_form_data1"])
  const [state__life_stream_controller, dispatch_state__life_stream_controller] = useReducer(applyDelta, initialState["state.life_stream_controller"])
  const [state__login_data, dispatch_state__login_data] = useReducer(applyDelta, initialState["state.login_data"])
  const [state__local_storage_state, dispatch_state__local_storage_state] = useReducer(applyDelta, initialState["state.local_storage_state"])
  const [state__upcoming_event_data, dispatch_state__upcoming_event_data] = useReducer(applyDelta, initialState["state.upcoming_event_data"])
  const [state__global_state, dispatch_state__global_state] = useReducer(applyDelta, initialState["state.global_state"])
  const [state__router_state, dispatch_state__router_state] = useReducer(applyDelta, initialState["state.router_state"])
  const [state__register_event_data, dispatch_state__register_event_data] = useReducer(applyDelta, initialState["state.register_event_data"])
  const [state__register_form_data, dispatch_state__register_form_data] = useReducer(applyDelta, initialState["state.register_form_data"])
  const [state__carousel_state, dispatch_state__carousel_state] = useReducer(applyDelta, initialState["state.carousel_state"])
  const [state__user_form_data, dispatch_state__user_form_data] = useReducer(applyDelta, initialState["state.user_form_data"])
  const [state__textfield_controlled, dispatch_state__textfield_controlled] = useReducer(applyDelta, initialState["state.textfield_controlled"])
  const [state__hide_form_state, dispatch_state__hide_form_state] = useReducer(applyDelta, initialState["state.hide_form_state"])
  const [state__form_data, dispatch_state__form_data] = useReducer(applyDelta, initialState["state.form_data"])
  const [state__client_storage_state, dispatch_state__client_storage_state] = useReducer(applyDelta, initialState["state.client_storage_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.user_credentials": dispatch_state__user_credentials,
      "state.create_event_data": dispatch_state__create_event_data,
      "state.register_data": dispatch_state__register_data,
      "state.my_param": dispatch_state__my_param,
      "state.event_state": dispatch_state__event_state,
      "state.event_form_data1": dispatch_state__event_form_data1,
      "state.life_stream_controller": dispatch_state__life_stream_controller,
      "state.login_data": dispatch_state__login_data,
      "state.local_storage_state": dispatch_state__local_storage_state,
      "state.upcoming_event_data": dispatch_state__upcoming_event_data,
      "state.global_state": dispatch_state__global_state,
      "state.router_state": dispatch_state__router_state,
      "state.register_event_data": dispatch_state__register_event_data,
      "state.register_form_data": dispatch_state__register_form_data,
      "state.carousel_state": dispatch_state__carousel_state,
      "state.user_form_data": dispatch_state__user_form_data,
      "state.textfield_controlled": dispatch_state__textfield_controlled,
      "state.hide_form_state": dispatch_state__hide_form_state,
      "state.form_data": dispatch_state__form_data,
      "state.client_storage_state": dispatch_state__client_storage_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__user_credentials.Provider value={ state__user_credentials }>
    <StateContexts.state__create_event_data.Provider value={ state__create_event_data }>
    <StateContexts.state__register_data.Provider value={ state__register_data }>
    <StateContexts.state__my_param.Provider value={ state__my_param }>
    <StateContexts.state__event_state.Provider value={ state__event_state }>
    <StateContexts.state__event_form_data1.Provider value={ state__event_form_data1 }>
    <StateContexts.state__life_stream_controller.Provider value={ state__life_stream_controller }>
    <StateContexts.state__login_data.Provider value={ state__login_data }>
    <StateContexts.state__local_storage_state.Provider value={ state__local_storage_state }>
    <StateContexts.state__upcoming_event_data.Provider value={ state__upcoming_event_data }>
    <StateContexts.state__global_state.Provider value={ state__global_state }>
    <StateContexts.state__router_state.Provider value={ state__router_state }>
    <StateContexts.state__register_event_data.Provider value={ state__register_event_data }>
    <StateContexts.state__register_form_data.Provider value={ state__register_form_data }>
    <StateContexts.state__carousel_state.Provider value={ state__carousel_state }>
    <StateContexts.state__user_form_data.Provider value={ state__user_form_data }>
    <StateContexts.state__textfield_controlled.Provider value={ state__textfield_controlled }>
    <StateContexts.state__hide_form_state.Provider value={ state__hide_form_state }>
    <StateContexts.state__form_data.Provider value={ state__form_data }>
    <StateContexts.state__client_storage_state.Provider value={ state__client_storage_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__client_storage_state.Provider>
    </StateContexts.state__form_data.Provider>
    </StateContexts.state__hide_form_state.Provider>
    </StateContexts.state__textfield_controlled.Provider>
    </StateContexts.state__user_form_data.Provider>
    </StateContexts.state__carousel_state.Provider>
    </StateContexts.state__register_form_data.Provider>
    </StateContexts.state__register_event_data.Provider>
    </StateContexts.state__router_state.Provider>
    </StateContexts.state__global_state.Provider>
    </StateContexts.state__upcoming_event_data.Provider>
    </StateContexts.state__local_storage_state.Provider>
    </StateContexts.state__login_data.Provider>
    </StateContexts.state__life_stream_controller.Provider>
    </StateContexts.state__event_form_data1.Provider>
    </StateContexts.state__event_state.Provider>
    </StateContexts.state__my_param.Provider>
    </StateContexts.state__register_data.Provider>
    </StateContexts.state__create_event_data.Provider>
    </StateContexts.state__user_credentials.Provider>
    </StateContexts.state.Provider>
  )
}