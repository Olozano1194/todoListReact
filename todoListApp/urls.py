from django.urls import path, include
from rest_framework import routers
from .views import TaskViewSet

#api versioning
router = routers.DefaultRouter()
router.register(r'Task', TaskViewSet, basename='Task')


urlpatterns = [
    path('api/v1/', include(router.urls)),
] 
