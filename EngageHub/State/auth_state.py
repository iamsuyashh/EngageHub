import reflex as rx
from .auth_session import AuthSession
AUTH_TOKEN_LOCAL_STORAGE_KEY = "_auth_tokens"
class AuthState(rx.State):
    is_logged_in: str = rx.LocalStorage("false")
    auth_token: str = rx.LocalStorage(name=AUTH_TOKEN_LOCAL_STORAGE_KEY)
    
    def on_login(self):
        self.is_logged_in = "true"
    def on_logout(self):
        self.is_logged_in = "false" 
    def authenticated_user(self):
        """The currently authenticated user, or a dummy user if not authenticated.

        Returns:
            A User instance with id=-1 if not authenticated, or the User instance
            corresponding to the currently authenticated user.
        """
        return -1  # type: ignore
    @rx.cached_var
    def is_authenticated(self):
        """Whether the current user is authenticated.
        
        Returns:
            True if the authenticated user has a positive user ID, False otherwise.
        """
        # self.auth_token = self.auth_token
        print(self.auth_token)
        # if AuthSession.user_name == self.auth_token:

        # return self.authenticated_user >= 0
    def logout(self):
        print()
    def _login(self):
        if self.is_authenticated:
            # Do logout
            self.logout()
        self.auth_token = self.auth_token