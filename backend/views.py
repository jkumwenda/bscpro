# Author name 		:	HashTagIO
# Phone 			:	+8615922015417
# Email   			:	jkumwenda@gmail.com
# Date Created		:	2018-10-02
# Last modified		:	2018-10-02

from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from .serializers import *
from .viewhelper import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
	# permission_classes = (IsAuthenticated,) 
	queryset	=   User.objects.all()
	serializer_class    =   UserSerializer

	def get_queryset(self):
		queryset = super().get_queryset()
		if self.request.query_params.get('user_id') is not None:
			data = ViewHelper.getUserByID(
				self, queryset,
				self.request.query_params.get('user_id'))
		else:
			data = queryset		
		return data


class RoleViewSet(viewsets.ModelViewSet):
	# permission_classes = (IsAuthenticated,) 
	queryset    =   Role.objects.all()
	serializer_class    =   RoleSerializer


class PermissionViewSet(viewsets.ModelViewSet):
	# permission_classes = (IsAuthenticated,) 
	queryset    =   Permission.objects.all()
	serializer_class    =   PermissionSerializer 


class RolePermissionViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   RolePermission.objects.all()
	serializer_class    =   RolePermissionSerializer          
  

class TitleViewSet(viewsets.ModelViewSet):
	# permission_classes = (IsAuthenticated,) 
	queryset    =   Title.objects.all()
	serializer_class    =   TitleSerializer    
    

class ProfileViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 	
	queryset    =   Profile.objects.all()
	serializer_class    =   ProfileSerializer    
 

class EmployeeViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Employee.objects.all()
	serializer_class    =   EmployeeSerializer 


class BoardViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Board.objects.all()
	serializer_class    =   BoardSerializer     


class OrganisationViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Organisation.objects.all()
	serializer_class    =   OrganisationSerializer  


class DepartmentViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Department.objects.all()
	serializer_class    =   DepartmentSerializer  


class PositonViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Positon.objects.all()
	serializer_class    =   PositonSerializer  


class EmployeePositonViewSet(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticated,) 
	queryset    =   Employee.objects.all()
	serializer_class    =   EmployeePositonSerializer 