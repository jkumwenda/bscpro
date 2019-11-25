# Author name 		:	HashTagIO
# Phone 			:	+265999371088
# Email   			:	jkumwenda@gmail.com
# Date Created		:	2019-10-02
# Last modified		:	2019-10-02

from rest_framework import serializers
from rest_framework.relations import HyperlinkedIdentityField
from .models import *


class RoleSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Role
		fields  =   '__all__'


class PermissionSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Permission
		fields  =   '__all__' 


class RolePermissionSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   RolePermission
		fields  =   '__all__'     


class TitleSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Title
		fields  =   '__all__'  


class ProfileSerializer(serializers.ModelSerializer):
	title = TitleSerializer(read_only=True)
	title_id = serializers.PrimaryKeyRelatedField(
                        queryset=Title.objects.all(),
                        write_only=True, source='title')					
	class Meta:
		model   =   Profile
		fields = '__all__'	
		

class UserSerializer(serializers.ModelSerializer ):
	password = serializers.CharField(write_only=True)
	userprofile = ProfileSerializer(required=False)
	class Meta:
		model 	= 	User
		fields = ('id','first_name', 'last_name', 'email', 'username', 'password', 'userprofile')	

	def create(self, validated_data, instance=None):
		profile_data = validated_data.pop('userprofile')
		user = User.objects.create(**validated_data)
		user.set_password(validated_data['password'])
		user.save()
		Profile.objects.update_or_create(user=user,**profile_data)
		return user		

		
class EmployeeSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Employee
		fields  =   '__all__'        


class BoardSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Board
		fields  =   '__all__'        


class OrganisationSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Organisation
		fields  =   '__all__' 


class DepartmentSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Department
		fields  =   '__all__' 


class PositonSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Positon
		fields  =   '__all__' 


class EmployeePositonSerializer(serializers.ModelSerializer):
	position = EmployeeSerializer(read_only=True)
	position_id = serializers.PrimaryKeyRelatedField(
                        queryset=Positon.objects.all(),
                        write_only=True, source='position')		
	class Meta:
		model   =   EmployeePositon
		fields  =   '__all__'         