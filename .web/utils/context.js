import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.form_state": {"form_data": {}}, "state.state": {}, "state.client_storage_state": {"currentUser": "", "custom_cookie": "", "user": ""}, "state.form_data": {"form_data": {}}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__form_state: createContext(null),
  state__state: createContext(null),
  state__client_storage_state: createContext(null),
  state__form_data: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"state.client_storage_state.user": {"path": "/", "sameSite": "lax"}, "state.client_storage_state.custom_cookie": {"name": "CustomNamedCookie", "path": "/", "maxAge": 3600, "sameSite": "lax"}}, "local_storage": {"state.client_storage_state.currentUser": {}}}

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
  const [state__form_state, dispatch_state__form_state] = useReducer(applyDelta, initialState["state.form_state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__client_storage_state, dispatch_state__client_storage_state] = useReducer(applyDelta, initialState["state.client_storage_state"])
  const [state__form_data, dispatch_state__form_data] = useReducer(applyDelta, initialState["state.form_data"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.form_state": dispatch_state__form_state,
      "state.state": dispatch_state__state,
      "state.client_storage_state": dispatch_state__client_storage_state,
      "state.form_data": dispatch_state__form_data,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__form_state.Provider value={ state__form_state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__client_storage_state.Provider value={ state__client_storage_state }>
    <StateContexts.state__form_data.Provider value={ state__form_data }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__form_data.Provider>
    </StateContexts.state__client_storage_state.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state__form_state.Provider>
    </StateContexts.state.Provider>
  )
}