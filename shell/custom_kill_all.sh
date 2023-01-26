killall(){
 PIDS=$(ps -ef | grep -v grep | grep $1 | awk '{print $2}' | tr '\n' ' ');
 echo "killing $1 PIDS $PIDS";
 kill -9 $PIDS
}
