from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin

import giraffe.views
import armadillo.views
import axolotl.views
import porcupine.views
from api.urls import api_urls


urlpatterns = [
    url("", include("social_django.urls", namespace="social")),

    # Admin calls
    url(r"^admin/?", admin.site.urls),

    # Health checks
    url(r"^health/", include("health_check.urls")),

    # API calls
    url(r"^api/", include(api_urls)),

    # Github OAuth
    path("_oauth/", include("oauth.urls", namespace="oauth")),

    # porcupine calls
    url(r"^porcupine/?", porcupine.views.porcupine, name="porcupine"),

    # armadillo calls
    url(r"^armadillo/?", armadillo.views.armadillo, name="armadillo"),

    # armadillo calls
    url(r"^axolotl/?", axolotl.views.axolotl, name="axolotl"),

    # giraffe calls
    url(r"^", giraffe.views.giraffe, name="giraffe"),

]
