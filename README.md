# GrpcServerClientExample
Python implementation of a Graph Server and Client

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

Run the Envoy
```
envoy -c envoy.yaml
```