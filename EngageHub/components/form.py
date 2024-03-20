import reflex as rx
from ..State.firebaseConfig import auth, add_user_to_firestore
from ..State.CustomState import UserCredentials ,user_state
class ClStorage(rx.State):
    currentUser: str = rx.LocalStorage(name="shared")
# from ..EngageHub import UserStorage
credentials = UserCredentials()
print("Form Page",ClStorage.currentUser)
# ClStorage.currentUser = "VaibhavSutar"


class VerifyState(rx.State):
    local_storage: str = rx.LocalStorage(name="auth_token")
    redirect_to: str = ""

    # async def verify_token(self, token: str) -> bool:
    #     async with httpx.AsyncClient() as client:
    #         result = await client.post(
    #             f"{url}/user/authenticated",
    #             cookies={"access_token": token},
    #             headers={"Content-Type": "application/json"},
    #         )
    #         if result.status_code == 200 and result.json().get("success"):
    #             return True
    #     return False

    async def redir(self):
        """Redirect to the redirect_to route if logged in, or to the login page if not."""
        print(self.local_storage)
        print(self.router.page.path)
        if not self.is_hydrated:
            # If the state is not hydrated, wait until it is
            return VerifyState.redir()
        page = self.router.page.path
        cookie = self.local_storage
        # Skip the cookie check for the login route and other routes as necessary
        if await self.verify_token(cookie):
            # Redirect to dashboard if the cookie is valid
            if page == "/signIn":
                return rx.redirect("/")
            else:
                return None
        else:
            # Redirect to login if the cookie is not valid
            if page != "/signIn":
                return rx.redirect("/signIn")
state :bool = True
# def login(sekfm)
def handle_Form_Submit(form_data):
    email = form_data.get("email")  # Access form_data correctly
    password = form_data.get("password")
    print("Email:",email)
    print("Password:",password)
    
    try:
            # user = auth.sign_in_with_email_and_password(email, password)
            rx.redirect("/signUp",external=True)
            # if state == True:
            UserCredentials.set_my_local_storage = "Vaibhav"
            # add_user_to_firestore("user","user.email")
            # print("User signed in:", user["email"])
            credentials.username = "Vaibhav"
            user_state.authenticated = True
            # userEmail = user["email"]
            # print("User Email: ", userEmail)
            ClStorage.currentUser = "Vaibhav"
            print("User State: ", ClStorage.currentUser)
            # ClStorage.set_currentUser
            # currentUser("Vaibhav")
            # UserCredentials.add_var()
            # UserStorage.set_user_email("Vaibhav@gmail.com")
            print("Username: ",credentials.username)
            # rx.script("")
            # userCred = auth.current_user()
            return rx.redirect("/")
        # Here you can perform any additional actions after successful sign-in
    except Exception as e:
        print("Error:", e)
        # Handle sign-in error, e.g., display error message to the user
    return rx.text("Sign-in successful!")  # Example response after sign-in
class FormData(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
       
        print(form_data)
        rx.window_alert("Hello")
        handle_Form_Submit(form_data)

def form_example():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Enter your email",
                    name="email",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    type_="email",
                    width = "100%"
                ),
                rx.input(
                    placeholder="Enter Password",
                    name="password",
                    type_="password",
                    style={"margin-bottom" : "1em"},
                    margin_bottom="1em",
                    width = "100%"),
                rx.button("Login", type_="submit" , bg = "indigo" , color = "white",variant="outline" , margin_top = "5em" , style={"margin-top" : "3em"}),
            ),
            on_submit=FormData.handle_submit,
            reset_on_submit=True,
            style={ "padding" : "2em", "width" : "500px", "margin-top" : "3em"}
        ),
    )