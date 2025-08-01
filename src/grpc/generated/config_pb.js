// source: config.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.config.Config', null, global);
goog.exportSymbol('proto.config.GetOrganizationConfigRequest', null, global);
goog.exportSymbol('proto.config.GetOrganizationConfigResponse', null, global);
goog.exportSymbol('proto.config.UpdateOrganizationConfigRequest', null, global);
goog.exportSymbol('proto.config.UpdateOrganizationConfigRequest.ConfigParams', null, global);
goog.exportSymbol('proto.config.UpdateOrganizationConfigResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.GetOrganizationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.GetOrganizationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.GetOrganizationConfigRequest.displayName = 'proto.config.GetOrganizationConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.Config.displayName = 'proto.config.Config';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.GetOrganizationConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.GetOrganizationConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.GetOrganizationConfigResponse.displayName = 'proto.config.GetOrganizationConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.UpdateOrganizationConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.UpdateOrganizationConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.UpdateOrganizationConfigRequest.displayName = 'proto.config.UpdateOrganizationConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.UpdateOrganizationConfigRequest.ConfigParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.UpdateOrganizationConfigRequest.ConfigParams.displayName = 'proto.config.UpdateOrganizationConfigRequest.ConfigParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.config.UpdateOrganizationConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.config.UpdateOrganizationConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.config.UpdateOrganizationConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.UpdateOrganizationConfigResponse.displayName = 'proto.config.UpdateOrganizationConfigResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.GetOrganizationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.config.GetOrganizationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.GetOrganizationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.GetOrganizationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authContext: (f = msg.getAuthContext()) && common_pb.AuthContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.GetOrganizationConfigRequest}
 */
proto.config.GetOrganizationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.GetOrganizationConfigRequest;
  return proto.config.GetOrganizationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.GetOrganizationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.GetOrganizationConfigRequest}
 */
proto.config.GetOrganizationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.AuthContext;
      reader.readMessage(value,common_pb.AuthContext.deserializeBinaryFromReader);
      msg.setAuthContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.GetOrganizationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.GetOrganizationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.GetOrganizationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.GetOrganizationConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthContext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.AuthContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional common.AuthContext auth_context = 1;
 * @return {?proto.common.AuthContext}
 */
proto.config.GetOrganizationConfigRequest.prototype.getAuthContext = function() {
  return /** @type{?proto.common.AuthContext} */ (
    jspb.Message.getWrapperField(this, common_pb.AuthContext, 1));
};


/**
 * @param {?proto.common.AuthContext|undefined} value
 * @return {!proto.config.GetOrganizationConfigRequest} returns this
*/
proto.config.GetOrganizationConfigRequest.prototype.setAuthContext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.config.GetOrganizationConfigRequest} returns this
 */
proto.config.GetOrganizationConfigRequest.prototype.clearAuthContext = function() {
  return this.setAuthContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.GetOrganizationConfigRequest.prototype.hasAuthContext = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.config.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultPostFupId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.Config}
 */
proto.config.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.Config;
  return proto.config.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.Config}
 */
proto.config.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultPostFupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.config.Config.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.config.Config} returns this
 */
proto.config.Config.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.config.Config.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.config.Config} returns this
 */
proto.config.Config.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string default_post_fup_id = 3;
 * @return {string}
 */
proto.config.Config.prototype.getDefaultPostFupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.config.Config} returns this
 */
proto.config.Config.prototype.setDefaultPostFupId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.config.Config} returns this
 */
proto.config.Config.prototype.clearDefaultPostFupId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.Config.prototype.hasDefaultPostFupId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.GetOrganizationConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.config.GetOrganizationConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.GetOrganizationConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.GetOrganizationConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.config.Config.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.GetOrganizationConfigResponse}
 */
proto.config.GetOrganizationConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.GetOrganizationConfigResponse;
  return proto.config.GetOrganizationConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.GetOrganizationConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.GetOrganizationConfigResponse}
 */
proto.config.GetOrganizationConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.config.Config;
      reader.readMessage(value,proto.config.Config.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.GetOrganizationConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.GetOrganizationConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.GetOrganizationConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.GetOrganizationConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.config.Config.serializeBinaryToWriter
    );
  }
};


/**
 * optional Config config = 1;
 * @return {?proto.config.Config}
 */
proto.config.GetOrganizationConfigResponse.prototype.getConfig = function() {
  return /** @type{?proto.config.Config} */ (
    jspb.Message.getWrapperField(this, proto.config.Config, 1));
};


/**
 * @param {?proto.config.Config|undefined} value
 * @return {!proto.config.GetOrganizationConfigResponse} returns this
*/
proto.config.GetOrganizationConfigResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.config.GetOrganizationConfigResponse} returns this
 */
proto.config.GetOrganizationConfigResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.GetOrganizationConfigResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.config.UpdateOrganizationConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.UpdateOrganizationConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authContext: (f = msg.getAuthContext()) && common_pb.AuthContext.toObject(includeInstance, f),
    configParams: (f = msg.getConfigParams()) && proto.config.UpdateOrganizationConfigRequest.ConfigParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.UpdateOrganizationConfigRequest}
 */
proto.config.UpdateOrganizationConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.UpdateOrganizationConfigRequest;
  return proto.config.UpdateOrganizationConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.UpdateOrganizationConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.UpdateOrganizationConfigRequest}
 */
proto.config.UpdateOrganizationConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.AuthContext;
      reader.readMessage(value,common_pb.AuthContext.deserializeBinaryFromReader);
      msg.setAuthContext(value);
      break;
    case 2:
      var value = new proto.config.UpdateOrganizationConfigRequest.ConfigParams;
      reader.readMessage(value,proto.config.UpdateOrganizationConfigRequest.ConfigParams.deserializeBinaryFromReader);
      msg.setConfigParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.UpdateOrganizationConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.UpdateOrganizationConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthContext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.AuthContext.serializeBinaryToWriter
    );
  }
  f = message.getConfigParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.config.UpdateOrganizationConfigRequest.ConfigParams.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.toObject = function(opt_includeInstance) {
  return proto.config.UpdateOrganizationConfigRequest.ConfigParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    defaultPostFupId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.UpdateOrganizationConfigRequest.ConfigParams}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.UpdateOrganizationConfigRequest.ConfigParams;
  return proto.config.UpdateOrganizationConfigRequest.ConfigParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.UpdateOrganizationConfigRequest.ConfigParams}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultPostFupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.UpdateOrganizationConfigRequest.ConfigParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} returns this
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string default_post_fup_id = 2;
 * @return {string}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.getDefaultPostFupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} returns this
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.setDefaultPostFupId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.config.UpdateOrganizationConfigRequest.ConfigParams} returns this
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.clearDefaultPostFupId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.UpdateOrganizationConfigRequest.ConfigParams.prototype.hasDefaultPostFupId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional common.AuthContext auth_context = 1;
 * @return {?proto.common.AuthContext}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.getAuthContext = function() {
  return /** @type{?proto.common.AuthContext} */ (
    jspb.Message.getWrapperField(this, common_pb.AuthContext, 1));
};


/**
 * @param {?proto.common.AuthContext|undefined} value
 * @return {!proto.config.UpdateOrganizationConfigRequest} returns this
*/
proto.config.UpdateOrganizationConfigRequest.prototype.setAuthContext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.config.UpdateOrganizationConfigRequest} returns this
 */
proto.config.UpdateOrganizationConfigRequest.prototype.clearAuthContext = function() {
  return this.setAuthContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.hasAuthContext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfigParams config_params = 2;
 * @return {?proto.config.UpdateOrganizationConfigRequest.ConfigParams}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.getConfigParams = function() {
  return /** @type{?proto.config.UpdateOrganizationConfigRequest.ConfigParams} */ (
    jspb.Message.getWrapperField(this, proto.config.UpdateOrganizationConfigRequest.ConfigParams, 2));
};


/**
 * @param {?proto.config.UpdateOrganizationConfigRequest.ConfigParams|undefined} value
 * @return {!proto.config.UpdateOrganizationConfigRequest} returns this
*/
proto.config.UpdateOrganizationConfigRequest.prototype.setConfigParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.config.UpdateOrganizationConfigRequest} returns this
 */
proto.config.UpdateOrganizationConfigRequest.prototype.clearConfigParams = function() {
  return this.setConfigParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.config.UpdateOrganizationConfigRequest.prototype.hasConfigParams = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.config.UpdateOrganizationConfigResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.config.UpdateOrganizationConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.config.UpdateOrganizationConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.UpdateOrganizationConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    configList: jspb.Message.toObjectList(msg.getConfigList(),
    proto.config.Config.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.config.UpdateOrganizationConfigResponse}
 */
proto.config.UpdateOrganizationConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.UpdateOrganizationConfigResponse;
  return proto.config.UpdateOrganizationConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.UpdateOrganizationConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.UpdateOrganizationConfigResponse}
 */
proto.config.UpdateOrganizationConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.config.Config;
      reader.readMessage(value,proto.config.Config.deserializeBinaryFromReader);
      msg.addConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.config.UpdateOrganizationConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.UpdateOrganizationConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.UpdateOrganizationConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.UpdateOrganizationConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.config.Config.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Config config = 1;
 * @return {!Array<!proto.config.Config>}
 */
proto.config.UpdateOrganizationConfigResponse.prototype.getConfigList = function() {
  return /** @type{!Array<!proto.config.Config>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.config.Config, 1));
};


/**
 * @param {!Array<!proto.config.Config>} value
 * @return {!proto.config.UpdateOrganizationConfigResponse} returns this
*/
proto.config.UpdateOrganizationConfigResponse.prototype.setConfigList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.config.Config=} opt_value
 * @param {number=} opt_index
 * @return {!proto.config.Config}
 */
proto.config.UpdateOrganizationConfigResponse.prototype.addConfig = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.config.Config, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.config.UpdateOrganizationConfigResponse} returns this
 */
proto.config.UpdateOrganizationConfigResponse.prototype.clearConfigList = function() {
  return this.setConfigList([]);
};


goog.object.extend(exports, proto.config);
