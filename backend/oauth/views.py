from django.shortcuts import redirect
from django.contrib.auth import logout

from giraffe.utils import log_user_action


def login(request):
    return redirect("social:begin", backend="github")


def logout_view(request):
    log_user_action("Logout", request.user, request)
    logout(request)
    # TODO make logout screen
    return redirect("/")


def callback(request):
    redirect_uri = request.GET.get("redirect_uri", "/")
    return redirect(redirect_uri)
