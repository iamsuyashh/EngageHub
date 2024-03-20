import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.user_credentials": {"password": "password", "username": ""}, "state.form_data": {"form_data": {}}, "state.my_param": {"Data": {}, "event_param": ""}, "state.local_storage_state": {"l1": "", "l2": "l2 default", "l3": ""}, "state.client_storage_state": {"custom_cookie": "", "my_cookie": "", "my_local_storage": ""}, "state.register_data": {"form_data": {}}, "state.router_state": {}, "state.state": {"is_admin": false, "is_authenticated": false, "user_name": ""}, "state.user_state": {"authenticated": false, "role": "user"}, "state.register_form_data": {"form_data": {}}, "state.carousel_state": {"current_image_index": 0, "images": ["https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg", "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://www.youtube.com/embed/eu1QGisT8jg?si=8YU8rzGD6P7Sno0-&amp;controls=0", "../../assets/event.jpeg"]}, "state.cl_storage": {"currentUser": ""}, "state.verify_state": {"local_storage": "", "redirect_to": ""}, "state.create_event_data": {"form_data": {}}, "state.state_two": {"same_shared_value": ""}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__user_credentials: createContext(null),
  state__form_data: createContext(null),
  state__my_param: createContext(null),
  state__local_storage_state: createContext(null),
  state__client_storage_state: createContext(null),
  state__register_data: createContext(null),
  state__router_state: createContext(null),
  state__state: createContext(null),
  state__user_state: createContext(null),
  state__register_form_data: createContext(null),
  state__carousel_state: createContext(null),
  state__cl_storage: createContext(null),
  state__verify_state: createContext(null),
  state__create_event_data: createContext(null),
  state__state_two: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"state.client_storage_state.my_cookie": {"name": "userCred", "path": "/", "sameSite": "lax"}, "state.client_storage_state.custom_cookie": {"name": "CustomNamedCookie", "path": "/", "maxAge": 3600, "sameSite": "lax"}}, "local_storage": {"state.user_credentials.username": {}, "state.user_credentials.password": {}, "state.local_storage_state.l1": {}, "state.local_storage_state.l2": {}, "state.local_storage_state.l3": {"name": "l3"}, "state.client_storage_state.my_local_storage": {}, "state.state.user_name": {"name": "userName"}, "state.cl_storage.currentUser": {"name": "shared"}, "state.verify_state.local_storage": {"name": "auth_token"}, "state.state_two.same_shared_value": {"name": "shared"}}}

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
  const [state__form_data, dispatch_state__form_data] = useReducer(applyDelta, initialState["state.form_data"])
  const [state__my_param, dispatch_state__my_param] = useReducer(applyDelta, initialState["state.my_param"])
  const [state__local_storage_state, dispatch_state__local_storage_state] = useReducer(applyDelta, initialState["state.local_storage_state"])
  const [state__client_storage_state, dispatch_state__client_storage_state] = useReducer(applyDelta, initialState["state.client_storage_state"])
  const [state__register_data, dispatch_state__register_data] = useReducer(applyDelta, initialState["state.register_data"])
  const [state__router_state, dispatch_state__router_state] = useReducer(applyDelta, initialState["state.router_state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__user_state, dispatch_state__user_state] = useReducer(applyDelta, initialState["state.user_state"])
  const [state__register_form_data, dispatch_state__register_form_data] = useReducer(applyDelta, initialState["state.register_form_data"])
  const [state__carousel_state, dispatch_state__carousel_state] = useReducer(applyDelta, initialState["state.carousel_state"])
  const [state__cl_storage, dispatch_state__cl_storage] = useReducer(applyDelta, initialState["state.cl_storage"])
  const [state__verify_state, dispatch_state__verify_state] = useReducer(applyDelta, initialState["state.verify_state"])
  const [state__create_event_data, dispatch_state__create_event_data] = useReducer(applyDelta, initialState["state.create_event_data"])
  const [state__state_two, dispatch_state__state_two] = useReducer(applyDelta, initialState["state.state_two"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.user_credentials": dispatch_state__user_credentials,
      "state.form_data": dispatch_state__form_data,
      "state.my_param": dispatch_state__my_param,
      "state.local_storage_state": dispatch_state__local_storage_state,
      "state.client_storage_state": dispatch_state__client_storage_state,
      "state.register_data": dispatch_state__register_data,
      "state.router_state": dispatch_state__router_state,
      "state.state": dispatch_state__state,
      "state.user_state": dispatch_state__user_state,
      "state.register_form_data": dispatch_state__register_form_data,
      "state.carousel_state": dispatch_state__carousel_state,
      "state.cl_storage": dispatch_state__cl_storage,
      "state.verify_state": dispatch_state__verify_state,
      "state.create_event_data": dispatch_state__create_event_data,
      "state.state_two": dispatch_state__state_two,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__user_credentials.Provider value={ state__user_credentials }>
    <StateContexts.state__form_data.Provider value={ state__form_data }>
    <StateContexts.state__my_param.Provider value={ state__my_param }>
    <StateContexts.state__local_storage_state.Provider value={ state__local_storage_state }>
    <StateContexts.state__client_storage_state.Provider value={ state__client_storage_state }>
    <StateContexts.state__register_data.Provider value={ state__register_data }>
    <StateContexts.state__router_state.Provider value={ state__router_state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__user_state.Provider value={ state__user_state }>
    <StateContexts.state__register_form_data.Provider value={ state__register_form_data }>
    <StateContexts.state__carousel_state.Provider value={ state__carousel_state }>
    <StateContexts.state__cl_storage.Provider value={ state__cl_storage }>
    <StateContexts.state__verify_state.Provider value={ state__verify_state }>
    <StateContexts.state__create_event_data.Provider value={ state__create_event_data }>
    <StateContexts.state__state_two.Provider value={ state__state_two }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state_two.Provider>
    </StateContexts.state__create_event_data.Provider>
    </StateContexts.state__verify_state.Provider>
    </StateContexts.state__cl_storage.Provider>
    </StateContexts.state__carousel_state.Provider>
    </StateContexts.state__register_form_data.Provider>
    </StateContexts.state__user_state.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state__router_state.Provider>
    </StateContexts.state__register_data.Provider>
    </StateContexts.state__client_storage_state.Provider>
    </StateContexts.state__local_storage_state.Provider>
    </StateContexts.state__my_param.Provider>
    </StateContexts.state__form_data.Provider>
    </StateContexts.state__user_credentials.Provider>
    </StateContexts.state.Provider>
  )
}