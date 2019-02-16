import socket;

try:
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM);
	print("Process initialised");
	
except socket.error as err:
	print("Could not setup socket");
	
port = 12345;

#connecting to the server
s.connect(('127.0.0.1',port));

#print all the recieving messages
print(s.recv(1024));

#close the connection
s.close();
