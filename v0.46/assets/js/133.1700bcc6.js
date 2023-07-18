(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{654:function(e,t,n){"use strict";n.r(t);var a=n(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"upgrading-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-modules"}},[e._v("#")]),e._v(" Upgrading Modules")]),e._v(" "),n("p",{attrs:{synopsis:""}},[n("RouterLink",{attrs:{to:"/core/upgrade.html"}},[e._v("In-Place Store Migrations")]),e._v(" allow your modules to upgrade to new versions that include breaking changes. This document outlines how to build modules to take advantage of this functionality.")],1),e._v(" "),n("h2",{attrs:{id:"prerequisite-readings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-readings"}},[e._v("#")]),e._v(" Prerequisite Readings")]),e._v(" "),n("ul",[n("li",{attrs:{prereq:""}},[n("RouterLink",{attrs:{to:"/core/upgrade.html"}},[e._v("In-Place Store Migration")])],1)]),e._v(" "),n("h2",{attrs:{id:"consensus-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consensus-version"}},[e._v("#")]),e._v(" Consensus Version")]),e._v(" "),n("p",[e._v("Successful upgrades of existing modules require each "),n("code",[e._v("AppModule")]),e._v(" to implement the function "),n("code",[e._v("ConsensusVersion() uint64")]),e._v(".")]),e._v(" "),n("ul",[n("li",[e._v("The versions must be hard-coded by the module developer.")]),e._v(" "),n("li",[e._v("The initial version "),n("strong",[e._v("must")]),e._v(" be set to 1.")])]),e._v(" "),n("p",[e._v("Consensus versions serve as state-breaking versions of app modules and must be incremented when the module introduces breaking changes.")]),e._v(" "),n("h2",{attrs:{id:"registering-migrations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#registering-migrations"}},[e._v("#")]),e._v(" Registering Migrations")]),e._v(" "),n("p",[e._v("To register the functionality that takes place during a module upgrade, you must register which migrations you want to take place.")]),e._v(" "),n("p",[e._v("Migration registration takes place in the "),n("code",[e._v("Configurator")]),e._v(" using the "),n("code",[e._v("RegisterMigration")]),e._v(" method. The "),n("code",[e._v("AppModule")]),e._v(" reference to the configurator is in the "),n("code",[e._v("RegisterServices")]),e._v(" method.")]),e._v(" "),n("p",[e._v("You can register one or more migrations. If you register more than one migration script, list the migrations in increasing order and ensure there are enough migrations that lead to the desired consensus version. For example, to migrate to version 3 of a module, register separate migrations for version 1 and version 2 as shown in the following example:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAoYW0gQXBwTW9kdWxlKSBSZWdpc3RlclNlcnZpY2VzKGNmZyBtb2R1bGUuQ29uZmlndXJhdG9yKSB7CiAgICAvLyAtLXNuaXAtLQogICAgY2ZnLlJlZ2lzdGVyTWlncmF0aW9uKHR5cGVzLk1vZHVsZU5hbWUsIDEsIGZ1bmMoY3R4IHNkay5Db250ZXh0KSBlcnJvciB7CiAgICAgICAgLy8gUGVyZm9ybSBpbi1wbGFjZSBzdG9yZSBtaWdyYXRpb25zIGZyb20gQ29uc2Vuc3VzVmVyc2lvbiAxIHRvIDIuCiAgICB9KQogICAgIGNmZy5SZWdpc3Rlck1pZ3JhdGlvbih0eXBlcy5Nb2R1bGVOYW1lLCAyLCBmdW5jKGN0eCBzZGsuQ29udGV4dCkgZXJyb3IgewogICAgICAgIC8vIFBlcmZvcm0gaW4tcGxhY2Ugc3RvcmUgbWlncmF0aW9ucyBmcm9tIENvbnNlbnN1c1ZlcnNpb24gMiB0byAzLgogICAgfSkKfQo="}}),e._v(" "),n("p",[e._v("Since these migrations are functions that need access to a Keeper's store, use a wrapper around the keepers called "),n("code",[e._v("Migrator")]),e._v(" as shown in this example:")]),e._v(" "),n("p",[n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWlncmF0b3IgaXMgYSBzdHJ1Y3QgZm9yIGhhbmRsaW5nIGluLXBsYWNlIHN0b3JlIG1pZ3JhdGlvbnMuCnR5cGUgTWlncmF0b3Igc3RydWN0IHsKCWtlZXBlciBCYXNlS2VlcGVyCn0KCi8vIE5ld01pZ3JhdG9yIHJldHVybnMgYSBuZXcgTWlncmF0b3IuCmZ1bmMgTmV3TWlncmF0b3Ioa2VlcGVyIEJhc2VLZWVwZXIpIE1pZ3JhdG9yIHsKCXJldHVybiBNaWdyYXRvcntrZWVwZXI6IGtlZXBlcn0KfQoKLy8gTWlncmF0ZTF0bzIgbWlncmF0ZXMgZnJvbSB2ZXJzaW9uIDEgdG8gMi4KZnVuYyAobSBNaWdyYXRvcikgTWlncmF0ZTF0bzIoY3R4IHNkay5Db250ZXh0KSBlcnJvciB7CglyZXR1cm4gdjA0My5NaWdyYXRlU3RvcmUoY3R4LCBtLmtlZXBlci5zdG9yZUtleSwgbS5rZWVwZXIuY2RjKQp9CgovLyBNaWdyYXRlMnRvMyBtaWdyYXRlcyB4L2Jhbmsgc3RvcmFnZSBmcm9tIHZlcnNpb24gMiB0byAzLgpmdW5jIChtIE1pZ3JhdG9yKSBNaWdyYXRlMnRvMyhjdHggc2RrLkNvbnRleHQpIGVycm9yIHsKCXJldHVybiB2MDQ2Lk1pZ3JhdGVTdG9yZShjdHgsIG0ua2VlcGVyLnN0b3JlS2V5LCBtLmtlZXBlci5jZGMpCn0="}})],1),e._v(" "),n("h2",{attrs:{id:"writing-migration-scripts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-migration-scripts"}},[e._v("#")]),e._v(" Writing Migration Scripts")]),e._v(" "),n("p",[e._v("To define the functionality that takes place during an upgrade, write a migration script and place the functions in a "),n("code",[e._v("migrations/")]),e._v(" directory. For example, to write migration scripts for the bank module, place the functions in "),n("code",[e._v("x/bank/migrations/")]),e._v(". Use the recommended naming convention for these functions. For example, "),n("code",[e._v("v043bank")]),e._v(" is the script that migrates the package "),n("code",[e._v("x/bank/migrations/v043")]),e._v(":")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gTWlncmF0aW5nIGJhbmsgbW9kdWxlIGZyb20gdmVyc2lvbiAxIHRvIDIKZnVuYyAobSBNaWdyYXRvcikgTWlncmF0ZTF0bzIoY3R4IHNkay5Db250ZXh0KSBlcnJvciB7CglyZXR1cm4gdjA0M2JhbmsuTWlncmF0ZVN0b3JlKGN0eCwgbS5rZWVwZXIuc3RvcmVLZXkpIC8vIHYwNDNiYW5rIGlzIHBhY2thZ2UgYHgvYmFuay9taWdyYXRpb25zL3YwNDNgLgp9Cg=="}}),e._v(" "),n("p",[e._v("To see example code of changes that were implemented in a migration of balance keys, check out "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/bank/migrations/v043/store.go#L50-L71",target:"_blank",rel:"noopener noreferrer"}},[e._v("migrateBalanceKeys"),n("OutboundLink")],1),e._v(". For context, this code introduced migrations of the bank store that updated addresses to be prefixed by their length in bytes as outlined in "),n("RouterLink",{attrs:{to:"/architecture/adr-028-public-key-addresses.html"}},[e._v("ADR-028")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);