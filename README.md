# GrpcServerClientExample
Python implementation of a Graph Server and Client (based on this [repo](https://github.com/chelseafarley/PythonGrpc/tree/main)) with an Envoy that can interact with gRPC web applications. 

## Setup

Install the Envoy in MacOS
```
brew install envoy
```

Install Grpc Tools
```
pip3 install grpcio-tools
```

Generate grpc code based on proto file
```
python3 -m grpc_tools.protoc -I protos --python_out=. --grpc_python_out=. protos/greet.proto
```

Run the Envoy (The Envoy allows a grpc-web app to communicate with the gRPC server)
```
envoy -c envoy.yaml
```

Run the gRPC Server
```
python3 server.py
```

Run the gRPC Client
```
python3 client.py
```

