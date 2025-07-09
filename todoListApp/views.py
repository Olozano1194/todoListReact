from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import TaskSerializer
from .models import Task


# Create your views here.
#clase para el crud de tareas
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    #esta clase nos sirve para listar los usuarios
    def list(self,request):
        try:
           task = Task.objects.all().order_by('-id')
           serializer = TaskSerializer(task, many=True)
           return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
           return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)