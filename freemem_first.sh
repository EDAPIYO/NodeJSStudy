touch j.log
(echo -n '[{"value": ' ; vm_stat | head -n 2 | tail -n 1 | tr -cd '0123456789' ; echo '}') >> j.log 
