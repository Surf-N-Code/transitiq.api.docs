'use client'
import { RedocStandalone } from 'redoc';

export default function Home() {
  return (
    <RedocStandalone options={{
      theme: {
        colors: {
          primary: {
            main: '#6EC5AB',
          },
          text: {
            primary: '#fff',
          },
        },
        sidebar: {
          backgroundColor: '#fff',
        },
        typography: {
          fontFamily: `"museo-sans", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
          fontSize: '15px',
          lineHeight: '1.5',
          code: {
            backgroundColor: '#4D4D4E',
          },
        },
        schema: {
          nestedBackground: '#4D4D4E',
        },
      },
    }}
    spec={{
      "openapi": "3.0.0",
      "info": {
        "version": "1.0.0",
        "title": "TransitIQ",
        "description": "TransitIQ API Documentation"
      },
      
      "paths": {
        "/verify": {
          "post": {
            "servers": [
              {
                "url": "https://api.transitiq.de",
                "description": "Production server"
              }
            ],
            "summary": "Verify uploaded file",
            "description": "Example usage:\n```javascript\nconst formData = new FormData();\n\nconst data = {\n  uuid: 'mentz-id',\n  user_personal_data: {\n    first_name: 'Norman',\n    // ... other fields\n  },\n};\n\nformData.append('data', JSON.stringify(data));\n\ndocuments.forEach((doc, index) => {\n  formData.append('files', fileObject, doc.id);\n});\n```",
            "requestBody": {
              "required": true,
              "content": {
                "multipart/form-data": {
                  "schema": {
                    "$ref": "#/components/schemas/VerifyRequest"
                  }
                },
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/VerifyRequest"
                  }
                }
              }
            },
            "security": [
              {
                "ApiKeyAuth": []
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "application/json": {
                    "schema": {
                      "allOf": [
                        { "$ref": "#/components/schemas/BaseResponse" },
                        {
                          "properties": {
                            "status_message": {
                              "type": "string",
                              "example": "approved"
                            },
                            "status_code": {
                              "type": "integer",
                              "example": 100
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "202": {
                "description": "Pending Review",
                "content": {
                  "application/json": {
                    "schema": {
                      "allOf": [
                        { "$ref": "#/components/schemas/BaseResponse" },
                        {
                          "properties": {
                            "status_message": {
                              "type": "string",
                              "example": "pending-review"
                            },
                            "status_code": {
                              "type": "integer",
                              "example": 250
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "403": {
                "description": "Forbidden",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Not Found",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "415": {
                "description": "Unsupported Media Type",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "429": {
                "description": "Too Many Requests"
              },
              "500": {
                "description": "Server Error",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/verify-test": {
          "post": {
            "servers": [
              {
                "url": "https://qa-api.transitiq.de",
                "description": "QA server"
              }
            ],
            "summary": "Test endpoint for verify functionality",
            "description": "Test endpoint that mirrors the /verify endpoint functionality and adds additional QA and TEST variables. Use this for testing without affecting production data.",
            "requestBody": {
              "required": true,
              "content": {
                "multipart/form-data": {
                  "schema": {
                    "$ref": "#/components/schemas/VerifyRequest"
                  }
                },
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/VerifyRequest"
                  }
                }
              }
            },
            "security": [
              {
                "ApiKeyAuth": []
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "application/json": {
                    "schema": {
                      "allOf": [
                        { "$ref": "#/components/schemas/BaseResponse" },
                        {
                          "properties": {
                            "status_message": {
                              "type": "string",
                              "example": "approved"
                            },
                            "status_code": {
                              "type": "integer",
                              "example": 100
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "202": {
                "description": "Pending Review",
                "content": {
                  "application/json": {
                    "schema": {
                      "allOf": [
                        { "$ref": "#/components/schemas/BaseResponse" },
                        {
                          "properties": {
                            "status_message": {
                              "type": "string",
                              "example": "pending-review"
                            },
                            "status_code": {
                              "type": "integer",
                              "example": 250
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "403": {
                "description": "Forbidden",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Not Found",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "415": {
                "description": "Unsupported Media Type",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              },
              "429": {
                "description": "Too Many Requests"
              },
              "500": {
                "description": "Server Error",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ErrorResponse"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": {
        "securitySchemes": {
          "ApiKeyAuth": {
            "type": "apiKey",
            "in": "header",
            "name": "Authorization"
          }
        },
        "schemas": {
          "Address": {
            "type": "object",
            "required": ["street", "zip", "city", "country"],
            "properties": {
              "street": {
                "type": "string",
                "example": "Im Rottfeld 15"
              },
              "zip": {
                "type": "string",
                "example": "40239"
              },
              "city": {
                "type": "string",
                "example": "Düsseldorf"
              },
              "country": {
                "type": "string",
                "example": "Germany"
              }
            }
          },
          "PersonalInfo": {
            "type": "object",
            "required": ["first_name", "last_name", "birthday", "address"],
            "properties": {
              "first_name": {
                "type": "string",
                "example": "Norman"
              },
              "last_name": {
                "type": "string",
                "example": "Dilthey"
              },
              "birthday": {
                "type": "string",
                "format": "date",
                "example": "1990-01-01"
              },
              "email": {
                "type": "string"
              },
              "phone": {
                "type": "string"
              },
              "address": {
                "$ref": "#/components/schemas/Address"
              }
            }
          },
          "School": {
            "type": "object",
            "required": [
              "name",
              "id",
              "address",
              "at_school_since",
              "expected_at_school_until",
              "current_grade"
            ],
            "properties": {
              "name": {
                "type": "string",
                "example": "St. Ursula Gymnasium",
                "description": "Name der Schule"
              },
              "id": {
                "type": "string",
                "example": "1234567890",
                "description": "Schulnummer von der Stadt Düsseldorf vergeben"
              },
              "address": {
                "$ref": "#/components/schemas/Address"
              },
              "at_school_since": {
                "type": "string",
                "format": "date"
              },
              "expected_at_school_until": {
                "type": "string",
                "format": "date"
              },
              "current_grade": {
                "type": "string"
              }
            }
          },
          "Document": {
            "type": "object",
            "required": ["id", "type", "date"],
            "properties": {
              "id": {
                "type": "string"
              },
              "type": {
                "type": "string",
                "enum": ["school-certificate", "social-certificate"]
              },
              "date": {
                "type": "string",
                "format": "date"
              }
            }
          },
          "VerifyRequest": {
            "type": "object",
            "required": ["data", "files"],
            "properties": {
              "files": {
                "type": "array",
                "items": {
                  "type": "string",
                  "format": "binary"
                },
                "minItems": 1,
                "description": "Array of files"
              },
              "data": {
                "type": "object",
                "required": [
                  "uuid",
                  "efa_id",
                  "personal_info",
                  "school"
                ],
                "properties": {
                  "uuid": {
                    "type": "string",
                    "example": "mentz-id",
                    "description": "defined by sender for unique identification of process"
                  },
                  "efa_id": {
                    "type": "string",
                    "example": "EFA VRR Ticket ID / Product id",
                    "description": "EFA VRR Ticket ID / Product id"
                  },
                  "personal_info": {
                    "$ref": "#/components/schemas/PersonalInfo"
                  },
                  "school": {
                    "$ref": "#/components/schemas/School"
                  },
                  "metadata": {
                    "type": "string",
                    "example": "{\"property1\": \"value1\", \"property2\": \"value2\"}",
                    "description": "JSON stringified field for any other data to be sent"
                  }
                }
              }
            }
          },
          "Confidence": {
            "type": "object",
            "properties": {
              "score": {
                "type": "number",
                "example": 0.70,
                "description": "Confidence score of the verification process"
              },
              "personal_info": {
                "type": "object",
                "properties": {
                  "first_name": {
                    "type": "string",
                    "example": "John",
                    "description": "First name of the person"
                  },
                  "last_name": {
                    "type": "string",
                    "example": "Doe",
                    "description": "Last name of the person"
                  },
                  "date_of_birth": {
                    "type": "string",
                    "format": "date",
                    "example": "1990-01-01",
                    "description": "Date of birth of the person"
                  },
                  "score": {
                    "type": "number",
                    "example": 0.85,
                    "description": "Confidence score for personal info"
                  }
                }
              },
              "school": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "example": "ABC School",
                    "description": "Name of the school"
                  },
                  "address": {
                    "type": "string",
                    "example": "123 School St.",
                    "description": "Address of the school"
                  },
                  "score": {
                    "type": "number",
                    "example": 0.90,
                    "description": "Confidence score for school info"
                  }
                }
              }
            }
          },
          "BaseResponse": {
            "type": "object",
            "properties": {
              "uuid": {
                "type": "string"
              },
              "efa_id": {
                "type": "string"
              },
              "personal_info": {
                "$ref": "#/components/schemas/PersonalInfo"
              },
              "school": {
                "$ref": "#/components/schemas/School"
              },
              "confidence": {
                "$ref": "#/components/schemas/Confidence"
              },
              "error_message": {
                "type": "string",
                "nullable": true,
                "description": ""
              }
            }
          },
          "ErrorResponse": {
            "allOf": [
              {
                "type": "object",
                "properties": {
                  "uuid": {
                    "type": "string"
                  },
                  "status_message": {
                    "type": "string",
                    "example": "error"
                  },
                  "status_code": {
                    "type": "integer",
                    "example": 400
                  },
                  "error_message": {
                    "type": "string"
                  }
                }
              }
            ]
          },
          "StatusMessage": {
            "type": "string",
            "enum": ["approved", "pending-review", "rejected", "error"],
            "description": "Status messages:\n- approved: Data is verified and accepted\n- pending-review: Data needs manual review\n- rejected: Application was declined\n- error: Error occurred during request or verification"
          },
          "StatusCode": {
            "type": "integer",
            "enum": [100, 200, 300, 400],
            "description": "Status codes:\n- 100: Approved - Application is verified and accepted\n- 300: Pending Review - Application needs manual review\n- 300: Rejected - Application was declined\n- 400: Error - Error occurred during request or verification"
          }
        }
      }
    }
    }/>
  );
}
