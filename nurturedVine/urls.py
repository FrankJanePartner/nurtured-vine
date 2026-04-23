from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # my apps urls
    path('', include('core.urls')),
]
