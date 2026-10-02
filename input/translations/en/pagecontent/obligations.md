### Introduction
Generic building blocks specify how information is modelled for all known use cases. It is not expected that all modelled information is actively supported by each user of a building block, as some information might not be relevant to the use case. Moreover, the expecations might not be the same for every role in the process. As a rule of thumb, the generic building blocks only require active support for the parts that are needed for correct interpretation of the data or are covered by law. For specific use cases, additional requirements may be defined; this is done as part of the use case specifications.

The generic building blocks adopt the FHIR obligations mechanism to specify the requirements regarding support for modelled information. This mechanism allows to specify in a fine grained way, per actor, what the requirements are for each data element in a model. Obligations are present both in the "afsprakenmodellen" and the FHIR profiles.

### Requirement levels
The obligations used on the generic building blocks use the requirement levels SHALL and SHOULD according to the definitions in RFC 2119.  

| Term   | Requirement Level | Definition|
| ---    | --------          | ---------------------------------- |
| SHALL  | Mandatory         |Means that the definition is an absolute requirement of the specification. |
| SHOULD | Recommended       |Means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course. |

### Actors  
Generic building blocks are meant for registering and exchanging information. For this use, three distinct actors are recognized. These are generic actors. For use cases, additional use case specific actors may be defined.

Registering system
: This actor represents a system that captures information from the real world into electronic format, like an EHR system or a personal health record.

Exchanging system
: This actor represents a system that electronically transfers information captured by a registering system to a third party. It is irrelevant for this actor description if information is actively sent, passively served, or otherwise. An exchanging system is not responsible for capturing (additional) information. Typically this is a FHIR client or server.

Receiving system
: This actor represents a system that receives information in electronic form from an exchanging system. As with exchanging systems, it is irrelevant for this actor description if information is received or actively retrieved.

These actor definitions are about the role the system performs during the process. Oftentimes, multiple actors are represented by the same physical system. 

### Obligations, cardinality, and `mustSupport`
In addition to obligations, data elements also have a cardinality to indicate how often they may or must occur. These are complementary mechanisms. Cardinality describes requirements for the data, while obligations describe requirements for actors.

For example, when an element has a cardinality of 0..1 or 0..*, the information does not need to be present in the data. This cardinality may be chosen for various reasons: the information is not relevant to every instantiation of the model (a procedure may be in progress, so the end time may be absent), there may be legacy data in which the data is not recorded, or it is not considered necessary to record or exchange the information. With obligations, it can be indicated that, for example, registering systems must populate the data element the moment the information exists.

FHIR also specifies a `mustSupport` flag for elements; when this is active, it signals that support is expected from users, but exactly what the expectation is, must be specified in the accompanying documentation. In this guide, all elementes with obligations are labeled `mustSupport` because [this is required by the FHIR spec](https://build.fhir.org/obligations.html#obligations). The interpretation of `mustSupport` in this guide is that the expectations are determined by the obligations. De `mustSupport` flag serves in this case as a fallback for users that are not familiar yet with the obligations mechanism.

### General considerations for obligations
On the generic level, only a small subset of the data elements need to be present for a sensible interpretation of the data being captured or exchanged. For obligations on this generic level, this is the only consideration. Downstream specifications for use cases might provide additional obligations regarding information that is relevant for said use case.

Usually, obligations and cardinality are applied in the following way:

|                                               | Cardinality | Registering system       | Exchanging system           | Receiving system  |
| ---                                           | ---         | ---                      | ---                         | ---               |
| Element needed for correct interpretation     | 1..         | SHALL *able to populate* | SHALL *populate*            | SHALL *handle*    |
| Element not needed for correct interpretation | 0..         |                          | SHOULLD *populate if known* | SHALL *no error*  |

This translates to the following:
1. If a data element is needed for correct interpretation of the data, it must always be present and a registering system has to be able to populate it in a meaningful way. The element also has to end up in the FHIR message and the receiver has to be able to do something with the information -- what exactly, is situation dependent.
2. When an element is nog needed for correct intrepretation of the data, it does not need to be present en there is no requirement to register it. Because the building blocks represents a national agreement, there is the expectation that it will be part of the FHIR message if it has been registered. For the same reason, receivers should never crash on the element, even if they don't need it for the use case it operates in.

These obligations also mean that exchanging systems are not required to populate information if it hasn't been registered in the first place. On a generic level, the exchange of historical or incorrectly registered information is thus not prohibited. In use case specifications this restrictions could be applied if there's a good reason to do so.

### Obligations on logical models vs FHIR profiles  
The logical models are used as the basis for defining FHIR profiles. Therefore, the obligations defined in the logical models align to those in the FHIR profiles, except when there's an indirect mapping between the logical model and the FHIR profile.

The actor "Registering system" is absent from the FHIR profiles, as FHIR is about data exchange, not registration.