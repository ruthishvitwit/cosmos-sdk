(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{622:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-040-storage-and-smt-state-commitments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-040-storage-and-smt-state-commitments"}},[e._v("#")]),e._v(" ADR 040: Storage and SMT State Commitments")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020-01-15: Draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("DRAFT Not Implemented")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Sparse Merkle Tree ("),a("a",{attrs:{href:"https://osf.io/8mcnh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMT"),a("OutboundLink")],1),e._v(") is a version of a Merkle Tree with various storage and performance optimizations. This ADR defines a separation of state commitments from data storage and the Cosmos SDK transition from IAVL to SMT.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently, Cosmos SDK uses IAVL for both state "),a("a",{attrs:{href:"https://cryptography.fandom.com/wiki/Commitment_scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("commitments"),a("OutboundLink")],1),e._v(" and data storage.")]),e._v(" "),a("p",[e._v("IAVL has effectively become an orphaned project within the Cosmos ecosystem and it's proven to be an inefficient state commitment data structure.\nIn the current design, IAVL is used for both data storage and as a Merkle Tree for state commitments. IAVL is meant to be a standalone Merkelized key/value database, however it's using a KV DB engine to store all tree nodes. So, each node is stored in a separate record in the KV DB. This causes many inefficiencies and problems:")]),e._v(" "),a("ul",[a("li",[e._v("Each object query requires a tree traversal from the root. Subsequent queries for the same object are cached on the Cosmos SDK level.")]),e._v(" "),a("li",[e._v("Each edge traversal requires a DB query.")]),e._v(" "),a("li",[e._v("Creating snapshots is "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7215#issuecomment-684804950",target:"_blank",rel:"noopener noreferrer"}},[e._v("expensive"),a("OutboundLink")],1),e._v(". It takes about 30 seconds to export less than 100 MB of state (as of March 2020).")]),e._v(" "),a("li",[e._v("Updates in IAVL may trigger tree reorganization and possible O(log(n)) hashes re-computation, which can become a CPU bottleneck.")]),e._v(" "),a("li",[e._v("The node structure is pretty expensive - it contains a standard tree node elements (key, value, left and right element) and additional metadata such as height, version (which is not required by the Cosmos SDK). The entire node is hashed, and that hash is used as the key in the underlying database, "),a("a",{attrs:{href:"https://github.com/cosmos/iavl/blob/master/docs/node/node.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ref"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Moreover, the IAVL project lacks support and a maintainer and we already see better and well-established alternatives. Instead of optimizing the IAVL, we are looking into other solutions for both storage and state commitments.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We propose to separate the concerns of state commitment ("),a("strong",[e._v("SC")]),e._v("), needed for consensus, and state storage ("),a("strong",[e._v("SS")]),e._v("), needed for state machine. Finally we replace IAVL with "),a("a",{attrs:{href:"https://github.com/lazyledger/smt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celestia's SMT"),a("OutboundLink")],1),e._v(". Celestia SMT is based on Diem (called jellyfish) design [*] - it uses a compute-optimised SMT by replacing subtrees with only default values with a single node (same approach is used by Ethereum2) and implements compact proofs.")]),e._v(" "),a("p",[e._v("The storage model presented here doesn't deal with data structure nor serialization. It's a Key-Value database, where both key and value are binaries. The storage user is responsible for data serialization.")]),e._v(" "),a("h3",{attrs:{id:"decouple-state-commitment-from-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decouple-state-commitment-from-storage"}},[e._v("#")]),e._v(" Decouple state commitment from storage")]),e._v(" "),a("p",[e._v("Separation of storage and commitment (by the SMT) will allow the optimization of different components according to their usage and access patterns.")]),e._v(" "),a("p",[a("code",[e._v("SC")]),e._v(" (SMT) is used to commit to a data and compute Merkle proofs. "),a("code",[e._v("SS")]),e._v(" is used to directly access data. To avoid collisions, both "),a("code",[e._v("SS")]),e._v(" and "),a("code",[e._v("SC")]),e._v(" will use a separate storage namespace (they could use the same database underneath). "),a("code",[e._v("SS")]),e._v(" will store each record directly (mapping "),a("code",[e._v("(key, value)")]),e._v(" as "),a("code",[e._v("key → value")]),e._v(").")]),e._v(" "),a("p",[e._v("SMT is a merkle tree structure: we don't store keys directly. For every "),a("code",[e._v("(key, value)")]),e._v(" pair, "),a("code",[e._v("hash(key)")]),e._v(" is used as leaf path (we hash a key to uniformly distribute leaves in the tree) and "),a("code",[e._v("hash(value)")]),e._v(" as the leaf contents. The tree structure is specified in more depth "),a("a",{attrs:{href:"#smt-for-state-commitment"}},[e._v("below")]),e._v(".")]),e._v(" "),a("p",[e._v("For data access we propose 2 additional KV buckets (implemented as namespaces for the key-value pairs, sometimes called "),a("a",{attrs:{href:"https://github.com/facebook/rocksdb/wiki/Terminology",target:"_blank",rel:"noopener noreferrer"}},[e._v("column family"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ol",[a("li",[e._v("B1: "),a("code",[e._v("key → value")]),e._v(": the principal object storage, used by a state machine, behind the Cosmos SDK "),a("code",[e._v("KVStore")]),e._v(" interface: provides direct access by key and allows prefix iteration (KV DB backend must support it).")]),e._v(" "),a("li",[e._v("B2: "),a("code",[e._v("hash(key) → key")]),e._v(": a reverse index to get a key from an SMT path. Internally the SMT will store "),a("code",[e._v("(key, value)")]),e._v(" as "),a("code",[e._v("prefix || hash(key) || hash(value)")]),e._v(". So, we can get an object value by composing "),a("code",[e._v("hash(key) → B2 → B1")]),e._v(".")]),e._v(" "),a("li",[e._v("We could use more buckets to optimize the app usage if needed.")])]),e._v(" "),a("p",[e._v("We propose to use a KV database for both "),a("code",[e._v("SS")]),e._v(" and "),a("code",[e._v("SC")]),e._v(". The store interface will allow to use the same physical DB backend for both "),a("code",[e._v("SS")]),e._v(" and "),a("code",[e._v("SC")]),e._v(" as well two separate DBs. The latter option allows for the separation of "),a("code",[e._v("SS")]),e._v(" and "),a("code",[e._v("SC")]),e._v(" into different hardware units, providing support for more complex setup scenarios and improving overall performance: one can use different backends (eg RocksDB and Badger) as well as independently tuning the underlying DB configuration.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("State Storage requirements:")]),e._v(" "),a("ul",[a("li",[e._v("range queries")]),e._v(" "),a("li",[e._v("quick (key, value) access")]),e._v(" "),a("li",[e._v("creating a snapshot")]),e._v(" "),a("li",[e._v("historical versioning")]),e._v(" "),a("li",[e._v("pruning (garbage collection)")])]),e._v(" "),a("p",[e._v("State Commitment requirements:")]),e._v(" "),a("ul",[a("li",[e._v("fast updates")]),e._v(" "),a("li",[e._v("tree path should be short")]),e._v(" "),a("li",[e._v("query historical commitment proofs using ICS-23 standard")]),e._v(" "),a("li",[e._v("pruning (garbage collection)")])]),e._v(" "),a("h3",{attrs:{id:"smt-for-state-commitment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smt-for-state-commitment"}},[e._v("#")]),e._v(" SMT for State Commitment")]),e._v(" "),a("p",[e._v("A Sparse Merkle tree is based on the idea of a complete Merkle tree of an intractable size. The assumption here is that as the size of the tree is intractable, there would only be a few leaf nodes with valid data blocks relative to the tree size, rendering a sparse tree.")]),e._v(" "),a("p",[e._v("The full specification can be found at "),a("a",{attrs:{href:"https://github.com/celestiaorg/celestia-specs/blob/ec98170398dfc6394423ee79b00b71038879e211/src/specs/data_structures.md#sparse-merkle-tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celestia"),a("OutboundLink")],1),e._v(". In summary:")]),e._v(" "),a("ul",[a("li",[e._v("The SMT consists of a binary Merkle tree, constructed in the same fashion as described in "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6962",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certificate Transparency (RFC-6962)"),a("OutboundLink")],1),e._v(", but using as the hashing function SHA-2-256 as defined in "),a("a",{attrs:{href:"https://doi.org/10.6028/NIST.FIPS.180-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("FIPS 180-4"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Leaves and internal nodes are hashed differently: the one-byte "),a("code",[e._v("0x00")]),e._v(" is prepended for leaf nodes while "),a("code",[e._v("0x01")]),e._v(" is prepended for internal nodes.")]),e._v(" "),a("li",[e._v("Default values are given to leaf nodes with empty leaves.")]),e._v(" "),a("li",[e._v("While the above rule is sufficient to pre-compute the values of intermediate nodes that are roots of empty subtrees, a further simplification is to extend this default value to all nodes that are roots of empty subtrees. The 32-byte zero is used as the default value. This rule takes precedence over the above one.")]),e._v(" "),a("li",[e._v("An internal node that is the root of a subtree that contains exactly one non-empty leaf is replaced by that leaf's leaf node.")])]),e._v(" "),a("h3",{attrs:{id:"snapshots-for-storage-sync-and-state-versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshots-for-storage-sync-and-state-versioning"}},[e._v("#")]),e._v(" Snapshots for storage sync and state versioning")]),e._v(" "),a("p",[e._v("Below, with simple "),a("em",[e._v("snapshot")]),e._v(" we refer to a database snapshot mechanism, not to a "),a("em",[e._v("ABCI snapshot sync")]),e._v(". The latter will be referred as "),a("em",[e._v("snapshot sync")]),e._v(" (which will directly use DB snapshot as described below).")]),e._v(" "),a("p",[e._v("Database snapshot is a view of DB state at a certain time or transaction. It's not a full copy of a database (it would be too big). Usually a snapshot mechanism is based on a "),a("em",[e._v("copy on write")]),e._v(" and it allows DB state to be efficiently delivered at a certain stage.\nSome DB engines support snapshotting. Hence, we propose to reuse that functionality for the state sync and versioning (described below). We limit the supported DB engines to ones which efficiently implement snapshots. In a final section we discuss the evaluated DBs.")]),e._v(" "),a("p",[e._v("One of the Stargate core features is a "),a("em",[e._v("snapshot sync")]),e._v(" delivered in the "),a("code",[e._v("/snapshot")]),e._v(" package. It provides a way to trustlessly sync a blockchain without repeating all transactions from the genesis. This feature is implemented in Cosmos SDK and requires storage support. Currently IAVL is the only supported backend. It works by streaming to a client a snapshot of a "),a("code",[e._v("SS")]),e._v(" at a certain version together with a header chain.")]),e._v(" "),a("p",[e._v("A new database snapshot will be created in every "),a("code",[e._v("EndBlocker")]),e._v(" and identified by a block height. The "),a("code",[e._v("root")]),e._v(" store keeps track of the available snapshots to offer "),a("code",[e._v("SS")]),e._v(" at a certain version. The "),a("code",[e._v("root")]),e._v(" store implements the "),a("code",[e._v("RootStore")]),e._v(" interface described below. In essence, "),a("code",[e._v("RootStore")]),e._v(" encapsulates a "),a("code",[e._v("Committer")]),e._v(" interface. "),a("code",[e._v("Committer")]),e._v(" has a "),a("code",[e._v("Commit")]),e._v(", "),a("code",[e._v("SetPruning")]),e._v(", "),a("code",[e._v("GetPruning")]),e._v(" functions which will be used for creating and removing snapshots. The "),a("code",[e._v("rootStore.Commit")]),e._v(" function creates a new snapshot and increments the version on each call, and checks if it needs to remove old versions. We will need to update the SMT interface to implement the "),a("code",[e._v("Committer")]),e._v(" interface.\nNOTE: "),a("code",[e._v("Commit")]),e._v(" must be called exactly once per block. Otherwise we risk going out of sync for the version number and block height.\nNOTE: For the Cosmos SDK storage, we may consider splitting that interface into "),a("code",[e._v("Committer")]),e._v(" and "),a("code",[e._v("PruningCommitter")]),e._v(" - only the multiroot should implement "),a("code",[e._v("PruningCommitter")]),e._v(" (cache and prefix store don't need pruning).")]),e._v(" "),a("p",[e._v("Number of historical versions for "),a("code",[e._v("abci.RequestQuery")]),e._v(" and state sync snapshots is part of a node configuration, not a chain configuration (configuration implied by the blockchain consensus). A configuration should allow to specify number of past blocks and number of past blocks modulo some number (eg: 100 past blocks and one snapshot every 100 blocks for past 2000 blocks). Archival nodes can keep all past versions.")]),e._v(" "),a("p",[e._v("Pruning old snapshots is effectively done by a database. Whenever we update a record in "),a("code",[e._v("SC")]),e._v(", SMT won't update nodes - instead it creates new nodes on the update path, without removing the old one. Since we are snapshotting each block, we need to change that mechanism to immediately remove orphaned nodes from the database. This is a safe operation - snapshots will keep track of the records and make it available when accessing past versions.")]),e._v(" "),a("p",[e._v("To manage the active snapshots we will either use a DB "),a("em",[e._v("max number of snapshots")]),e._v(" option (if available), or we will remove DB snapshots in the "),a("code",[e._v("EndBlocker")]),e._v(". The latter option can be done efficiently by identifying snapshots with block height and calling a store function to remove past versions.")]),e._v(" "),a("h4",{attrs:{id:"accessing-old-state-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-old-state-versions"}},[e._v("#")]),e._v(" Accessing old state versions")]),e._v(" "),a("p",[e._v("One of the functional requirements is to access old state. This is done through "),a("code",[e._v("abci.RequestQuery")]),e._v(" structure.  The version is specified by a block height (so we query for an object by a key "),a("code",[e._v("K")]),e._v(" at block height "),a("code",[e._v("H")]),e._v("). The number of old versions supported for "),a("code",[e._v("abci.RequestQuery")]),e._v(" is configurable. Accessing an old state is done by using available snapshots.\n"),a("code",[e._v("abci.RequestQuery")]),e._v(" doesn't need old state of "),a("code",[e._v("SC")]),e._v(" unless the "),a("code",[e._v("prove=true")]),e._v(" parameter is set. The SMT merkle proof must be included in the "),a("code",[e._v("abci.ResponseQuery")]),e._v(" only if both "),a("code",[e._v("SC")]),e._v(" and "),a("code",[e._v("SS")]),e._v(" have a snapshot for requested version.")]),e._v(" "),a("p",[e._v("Moreover, Cosmos SDK could provide a way to directly access a historical state. However, a state machine shouldn't do that - since the number of snapshots is configurable, it would lead to nondeterministic execution.")]),e._v(" "),a("p",[e._v("We positively "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/8297",target:"_blank",rel:"noopener noreferrer"}},[e._v("validated"),a("OutboundLink")],1),e._v(" a versioning and snapshot mechanism for querying old state with regards to the database we evaluated.")]),e._v(" "),a("h3",{attrs:{id:"state-proofs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-proofs"}},[e._v("#")]),e._v(" State Proofs")]),e._v(" "),a("p",[e._v("For any object stored in State Store (SS), we have corresponding object in "),a("code",[e._v("SC")]),e._v(". A proof for object "),a("code",[e._v("V")]),e._v(" identified by a key "),a("code",[e._v("K")]),e._v(" is a branch of "),a("code",[e._v("SC")]),e._v(", where the path corresponds to the key "),a("code",[e._v("hash(K)")]),e._v(", and the leaf is "),a("code",[e._v("hash(K, V)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"rollbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollbacks"}},[e._v("#")]),e._v(" Rollbacks")]),e._v(" "),a("p",[e._v("We need to be able to process transactions and roll-back state updates if a transaction fails. This can be done in the following way: during transaction processing, we keep all state change requests (writes) in a "),a("code",[e._v("CacheWrapper")]),e._v(" abstraction (as it's done today). Once we finish the block processing, in the "),a("code",[e._v("Endblocker")]),e._v(",  we commit a root store - at that time, all changes are written to the SMT and to the "),a("code",[e._v("SS")]),e._v(" and a snapshot is created.")]),e._v(" "),a("h3",{attrs:{id:"committing-to-an-object-without-saving-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#committing-to-an-object-without-saving-it"}},[e._v("#")]),e._v(" Committing to an object without saving it")]),e._v(" "),a("p",[e._v("We identified use-cases, where modules will need to save an object commitment without storing an object itself. Sometimes clients are receiving complex objects, and they have no way to prove a correctness of that object without knowing the storage layout. For those use cases it would be easier to commit to the object without storing it directly.")]),e._v(" "),a("h3",{attrs:{id:"refactor-multistore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refactor-multistore"}},[e._v("#")]),e._v(" Refactor MultiStore")]),e._v(" "),a("p",[e._v("The Stargate "),a("code",[e._v("/store")]),e._v(" implementation (store/v1) adds an additional layer in the SDK store construction - the "),a("code",[e._v("MultiStore")]),e._v(" structure. The multistore exists to support the modularity of the Cosmos SDK - each module is using its own instance of IAVL, but in the current implementation, all instances share the same database. The latter indicates, however, that the implementation doesn't provide true modularity. Instead it causes problems related to race condition and atomic DB commits (see: "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6370",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6370"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/8297#discussioncomment-757043",target:"_blank",rel:"noopener noreferrer"}},[e._v("discussion"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("We propose to reduce the multistore concept from the SDK, and to use a single instance of "),a("code",[e._v("SC")]),e._v(" and "),a("code",[e._v("SS")]),e._v(" in a "),a("code",[e._v("RootStore")]),e._v(" object. To avoid confusion, we should rename the "),a("code",[e._v("MultiStore")]),e._v(" interface to "),a("code",[e._v("RootStore")]),e._v(". The "),a("code",[e._v("RootStore")]),e._v(" will have the following interface; the methods for configuring tracing and listeners are omitted for brevity.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVXNlZCB3aGVyZSByZWFkLW9ubHkgYWNjZXNzIHRvIHZlcnNpb25zIGlzIG5lZWRlZC4KdHlwZSBCYXNpY1Jvb3RTdG9yZSBpbnRlcmZhY2UgewogICAgU3RvcmUKICAgIEdldEtWU3RvcmUoU3RvcmVLZXkpIEtWU3RvcmUKICAgIENhY2hlUm9vdFN0b3JlKCkgQ2FjaGVSb290U3RvcmUKfQoKLy8gVXNlZCBhcyB0aGUgbWFpbiBhcHAgc3RhdGUsIHJlcGxhY2luZyBDb21taXRNdWx0aVN0b3JlLgp0eXBlIENvbW1pdFJvb3RTdG9yZSBpbnRlcmZhY2UgewogICAgQmFzaWNSb290U3RvcmUKICAgIENvbW1pdHRlcgogICAgU25hcHNob3R0ZXIKCiAgICBHZXRWZXJzaW9uKHVpbnQ2NCkgKEJhc2ljUm9vdFN0b3JlLCBlcnJvcikKICAgIFNldEluaXRpYWxWZXJzaW9uKHVpbnQ2NCkgZXJyb3IKCiAgICAuLi4gLy8gVHJhY2UgYW5kIExpc3RlbiBtZXRob2RzCn0KCi8vIFJlcGxhY2VzIENhY2hlTXVsdGlTdG9yZSBmb3IgYnJhbmNoZWQgc3RhdGUuCnR5cGUgQ2FjaGVSb290U3RvcmUgaW50ZXJmYWNlIHsKICAgIEJhc2ljUm9vdFN0b3JlCiAgICBXcml0ZSgpCgogICAgLi4uIC8vIFRyYWNlIGFuZCBMaXN0ZW4gbWV0aG9kcwp9CgovLyBFeGFtcGxlIG9mIGNvbnN0cnVjdG9yIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25jcmV0ZSB0eXBlLgp0eXBlIFJvb3RTdG9yZUNvbmZpZyBzdHJ1Y3QgewogICAgVXBncmFkZXMgICAgICAgICpTdG9yZVVwZ3JhZGVzCiAgICBJbml0aWFsVmVyc2lvbiAgdWludDY0CgogICAgUmVzZXJ2ZVByZWZpeChTdG9yZUtleSwgU3RvcmVUeXBlKQp9Cg=="}}),e._v(" "),a("p",[e._v("In contrast to "),a("code",[e._v("MultiStore")]),e._v(", "),a("code",[e._v("RootStore")]),e._v(" doesn't allow to dynamically mount sub-stores or provide an arbitrary backing DB for individual sub-stores.")]),e._v(" "),a("p",[e._v("NOTE: modules will be able to use a special commitment and their own DBs. For example: a module which will use ZK proofs for state can store and commit this proof in the "),a("code",[e._v("RootStore")]),e._v(" (usually as a single record) and manage the specialized store privately or using the "),a("code",[e._v("SC")]),e._v(" low level interface.")]),e._v(" "),a("h4",{attrs:{id:"compatibility-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-support"}},[e._v("#")]),e._v(" Compatibility support")]),e._v(" "),a("p",[e._v("To ease the transition to this new interface for users, we can create a shim which wraps a "),a("code",[e._v("CommitMultiStore")]),e._v(" but provides a "),a("code",[e._v("CommitRootStore")]),e._v(" interface, and expose functions to safely create and access the underlying "),a("code",[e._v("CommitMultiStore")]),e._v(".")]),e._v(" "),a("p",[e._v("The new "),a("code",[e._v("RootStore")]),e._v(" and supporting types can be implemented in a "),a("code",[e._v("store/v2alpha1")]),e._v(" package to avoid breaking existing code.")]),e._v(" "),a("h4",{attrs:{id:"merkle-proofs-and-ibc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merkle-proofs-and-ibc"}},[e._v("#")]),e._v(" Merkle Proofs and IBC")]),e._v(" "),a("p",[e._v("Currently, an IBC (v1.0) Merkle proof path consists of two elements ("),a("code",[e._v('["<store-key>", "<record-key>"]')]),e._v("), with each key corresponding to a separate proof. These are each verified according to individual "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/f7051429e1cf833a6f65d51e6c3df1609290a549/modules/core/23-commitment/types/merkle.go#L17",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 specs"),a("OutboundLink")],1),e._v(", and the result hash of each step is used as the committed value of the next step, until a root commitment hash is obtained.\nThe root hash of the proof for "),a("code",[e._v('"<record-key>"')]),e._v(" is hashed with the "),a("code",[e._v('"<store-key>"')]),e._v(" to validate against the App Hash.")]),e._v(" "),a("p",[e._v("This is not compatible with the "),a("code",[e._v("RootStore")]),e._v(', which stores all records in a single Merkle tree structure, and won\'t produce separate proofs for the store- and record-key. Ideally, the store-key component of the proof could just be omitted, and updated to use a "no-op" spec, so only the record-key is used. However, because the IBC verification code hardcodes the '),a("code",[e._v('"ibc"')]),e._v(" prefix and applies it to the SDK proof as a separate element of the proof path, this isn't possible without a breaking change. Breaking this behavior would severely impact the Cosmos ecosystem which already widely adopts the IBC module. Requesting an update of the IBC module across the chains is a time consuming effort and not easily feasible.")]),e._v(" "),a("p",[e._v("As a workaround, the "),a("code",[e._v("RootStore")]),e._v(" will have to use two separate SMTs (they could use the same underlying DB): one for IBC state and one for everything else. A simple Merkle map that reference these SMTs will act as a Merkle Tree to create a final App hash. The Merkle map is not stored in a DBs - it's constructed in the runtime. The IBC substore key must be "),a("code",[e._v('"ibc"')]),e._v(".")]),e._v(" "),a("p",[e._v("The workaround can still guarantee atomic syncs: the "),a("a",{attrs:{href:"#evaluated-kv-databases"}},[e._v("proposed DB backends")]),e._v(" support atomic transactions and efficient rollbacks, which will be used in the commit phase.")]),e._v(" "),a("p",[e._v("The presented workaround can be used until the IBC module is fully upgraded to supports single-element commitment proofs.")]),e._v(" "),a("h3",{attrs:{id:"optimization-compress-module-key-prefixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-compress-module-key-prefixes"}},[e._v("#")]),e._v(" Optimization: compress module key prefixes")]),e._v(" "),a("p",[e._v("We consider a compression of prefix keys by creating a mapping from module key to an integer, and serializing the integer using varint coding. Varint coding assures that different values don't have common byte prefix. For Merkle Proofs we can't use prefix compression - so it should only apply for the "),a("code",[e._v("SS")]),e._v(" keys. Moreover, the prefix compression should be only applied for the module namespace. More precisely:")]),e._v(" "),a("ul",[a("li",[e._v("each module has it's own namespace;")]),e._v(" "),a("li",[e._v("when accessing a module namespace we create a KVStore with embedded prefix;")]),e._v(" "),a("li",[e._v("that prefix will be compressed only when accessing and managing "),a("code",[e._v("SS")]),e._v(".")])]),e._v(" "),a("p",[e._v("We need to assure that the codes won't change. We can fix the mapping in a static variable (provided by an app) or SS state under a special key.")]),e._v(" "),a("p",[e._v("TODO: need to make decision about the key compression.")]),e._v(" "),a("h2",{attrs:{id:"optimization-ss-key-compression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-ss-key-compression"}},[e._v("#")]),e._v(" Optimization: SS key compression")]),e._v(" "),a("p",[e._v("Some objects may be saved with key, which contains a Protobuf message type. Such keys are long. We could save a lot of space if we can map Protobuf message types in varints.")]),e._v(" "),a("p",[e._v("TODO: finalize this or move to another ADR.")]),e._v(" "),a("h2",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[e._v("#")]),e._v(" Migration")]),e._v(" "),a("p",[e._v("Using the new store will require a migration. 2 Migrations are proposed:")]),e._v(" "),a("ol",[a("li",[e._v("Genesis export -- it will reset the blockchain history.")]),e._v(" "),a("li",[e._v("In place migration: we can reuse "),a("code",[e._v("UpgradeKeeper.SetUpgradeHandler")]),e._v(" to provide the migration logic:")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go ",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoJnF1b3Q7YWRyLTQwJnF1b3Q7LCBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcGxhbiB1cGdyYWRldHlwZXMuUGxhbiwgdm0gbW9kdWxlLlZlcnNpb25NYXApIChtb2R1bGUuVmVyc2lvbk1hcCwgZXJyb3IpIHsKCiAgICBzdG9yZXYyLk1pZ3JhdGUoaWF2bHN0b3JlLCB2Mi5zdG9yZSkKCiAgICAvLyBSdW5NaWdyYXRpb25zIHJldHVybnMgdGhlIFZlcnNpb25NYXAKICAgIC8vIHdpdGggdGhlIHVwZGF0ZWQgbW9kdWxlIENvbnNlbnN1c1ZlcnNpb25zCiAgICByZXR1cm4gYXBwLm1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCB2bSkKfSkK"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Migrate")]),e._v(" function will read all entries from a store/v1 DB and save them to the AD-40 combined KV store.\nCache layer should not be used and the operation must finish with a single Commit call.")]),e._v(" "),a("p",[e._v("Inserting records to the "),a("code",[e._v("SC")]),e._v(" (SMT) component is the bottleneck. Unfortunately SMT doesn't support batch transactions.\nAdding batch transactions to "),a("code",[e._v("SC")]),e._v(" layer is considered as a feature after the main release.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This ADR doesn't introduce any Cosmos SDK level API changes.")]),e._v(" "),a("p",[e._v("We change the storage layout of the state machine, a storage hard fork and network upgrade is required to incorporate these changes. SMT provides a merkle proof functionality, however it is not compatible with ICS23. Updating the proofs for ICS23 compatibility is required.")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Decoupling state from state commitment introduce better engineering opportunities for further optimizations and better storage patterns.")]),e._v(" "),a("li",[e._v("Performance improvements.")]),e._v(" "),a("li",[e._v("Joining SMT based camp which has wider and proven adoption than IAVL. Example projects which decided on SMT: Ethereum2, Diem (Libra), Trillan, Tezos, Celestia.")]),e._v(" "),a("li",[e._v("Multistore removal fixes a longstanding issue with the current MultiStore design.")]),e._v(" "),a("li",[e._v("Simplifies merkle proofs - all modules, except IBC, have only one pass for merkle proof.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Storage migration")]),e._v(" "),a("li",[e._v("LL SMT doesn't support pruning - we will need to add and test that functionality.")]),e._v(" "),a("li",[a("code",[e._v("SS")]),e._v(" keys will have an overhead of a key prefix. This doesn't impact "),a("code",[e._v("SC")]),e._v(" because all keys in "),a("code",[e._v("SC")]),e._v(" have same size (they are hashed).")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("Deprecating IAVL, which is one of the core proposals of Cosmos Whitepaper.")])]),e._v(" "),a("h2",{attrs:{id:"alternative-designs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-designs"}},[e._v("#")]),e._v(" Alternative designs")]),e._v(" "),a("p",[e._v("Most of the alternative designs were evaluated in "),a("a",{attrs:{href:"https://paper.dropbox.com/published/State-commitments-and-storage-review--BDvA1MLwRtOx55KRihJ5xxLbBw-KeEB7eOd11pNrZvVtqUgL3h",target:"_blank",rel:"noopener noreferrer"}},[e._v("state commitments and storage report"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Ethereum research published "),a("a",{attrs:{href:"https://dankradfeist.de/ethereum/2021/06/18/verkle-trie-for-eth1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verkle Trie"),a("OutboundLink")],1),e._v(" - an idea of combining polynomial commitments with merkle tree in order to reduce the tree height. This concept has a very good potential, but we think it's too early to implement it. The current, SMT based design could be easily updated to the Verkle Trie once other research implement all necessary libraries. The main advantage of the design described in this ADR is the separation of state commitments from the data storage and designing a more powerful interface.")]),e._v(" "),a("h2",{attrs:{id:"further-discussions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),a("h3",{attrs:{id:"evaluated-kv-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluated-kv-databases"}},[e._v("#")]),e._v(" Evaluated KV Databases")]),e._v(" "),a("p",[e._v("We verified existing databases KV databases for evaluating snapshot support. The following databases provide efficient snapshot mechanism: Badger, RocksDB, "),a("a",{attrs:{href:"https://github.com/cockroachdb/pebble",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pebble"),a("OutboundLink")],1),e._v(". Databases which don't provide such support or are not production ready: boltdb, leveldb, goleveldb, membdb, lmdb.")]),e._v(" "),a("h3",{attrs:{id:"rdbms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdbms"}},[e._v("#")]),e._v(" RDBMS")]),e._v(" "),a("p",[e._v("Use of RDBMS instead of simple KV store for state. Use of RDBMS will require a Cosmos SDK API breaking change ("),a("code",[e._v("KVStore")]),e._v(" interface) and will allow better data extraction and indexing solutions. Instead of saving an object as a single blob of bytes, we could save it as record in a table in the state storage layer, and as a "),a("code",[e._v("hash(key, protobuf(object))")]),e._v(" in the SMT as outlined above. To verify that an object registered in RDBMS is same as the one committed to SMT, one will need to load it from RDBMS, marshal using protobuf, hash and do SMT search.")]),e._v(" "),a("h3",{attrs:{id:"off-chain-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-store"}},[e._v("#")]),e._v(" Off Chain Store")]),e._v(" "),a("p",[e._v("We were discussing use case where modules can use a support database, which is not automatically committed. Module will responsible for having a sound storage model and can optionally use the feature discussed in _"),a("em",[e._v("Committing to an object without saving it")]),e._v(" section.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7100",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAVL What's Next?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/document/d/16Z_hW2rSAmoyMENO-RlAhQjAG3mSNKsQueMnKpmcBv0/edit#heading=h.yd2th7x3o1iv",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAVL overview"),a("OutboundLink")],1),e._v(" of it's state v0.15")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://paper.dropbox.com/published/State-commitments-and-storage-review--BDvA1MLwRtOx55KRihJ5xxLbBw-KeEB7eOd11pNrZvVtqUgL3h",target:"_blank",rel:"noopener noreferrer"}},[e._v("State commitments and storage report"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/lazyledger/smt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celestia (LazyLedger) SMT"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Facebook Diem (Libra) SMT "),a("a",{attrs:{href:"https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("design"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/google/trillian/blob/master/docs/papers/RevocationTransparency.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trillian Revocation Transparency"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/google/trillian/blob/master/docs/papers/VerifiableDataStructures.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trillian Verifiable Data Structures"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Design and implementation "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/discussions/8297",target:"_blank",rel:"noopener noreferrer"}},[e._v("discussion"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/ibc/upgrades/quick-guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Upgrade IBC Chains and their Clients"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/discussions/256",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-40 Effect on IBC"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);