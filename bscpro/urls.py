# Author name 		:	HashTagIO
# Phone 			:	+8615922015417
# Email   			:	jkumwenda@gmail.com
# Date Created		:	2018-10-02
# Last modified		:	2018-10-02

from django.conf.urls import url, include
from rest_framework import routers
from backend import views as backend_views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

router = routers.DefaultRouter()
router.register(r'user', backend_views.UserViewSet, base_name='User')
router.register(r'role', backend_views.RoleViewSet, base_name='Role')
router.register(r'permission', backend_views.PermissionViewSet, base_name='Permission')
router.register(r'role-permission', backend_views.RolePermissionViewSet, base_name='Role Permission')
router.register(r'title', backend_views.TitleViewSet, base_name='Title')
router.register(r'profile', backend_views.ProfileViewSet, base_name='Profile')
router.register(r'employee', backend_views.EmployeeViewSet, base_name='Employee')
router.register(r'board', backend_views.BoardViewSet, base_name='Board')
router.register(r'organisation', backend_views.OrganisationViewSet, base_name='Organisation')
router.register(r'department', backend_views.DepartmentViewSet, base_name='Department')
router.register(r'positon', backend_views.PositonViewSet, base_name='Positon')
router.register(r'employee-positon', backend_views.EmployeePositonViewSet, base_name='Employee Positon')

schema_view = get_swagger_view(title='BSC-PRO API')

urlpatterns = (
    url('^$', schema_view),
	url(r'^api/',include(router.urls)),
    # url(r'^api-token-auth/', views.obtain_auth_token),
    url(r'^auth-jwt/', obtain_jwt_token),
    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),  
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), 
)
