from django.core.serializers import json
from django.http import JsonResponse, HttpResponse

from dvadmin.system.models import Device_information


# 下面是我自己尝试写的一些获取数据的代码
def create_obj(request):
    device_id = request.POST.get('device_id', 0)
    return_param = {}
    try:
        Device_information.objects.update_or_create(device_id=device_id, status=1)# 如果相同就进行一个更新
        return_param = Device_information.object.all()
        return_param['msg'] = 'success'
    except Exception as e:
        return_param['msg'] = 'fail'
    return HttpResponse(json.dumps(return_param))

