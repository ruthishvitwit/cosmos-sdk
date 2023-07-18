(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{786:function(e,n,t){"use strict";t.r(n);var o=t(1),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("p",[e._v("The internal state of the "),t("code",[e._v("x/upgrade")]),e._v(" module is relatively minimal and simple. The\nstate contains the currently active upgrade "),t("code",[e._v("Plan")]),e._v(" (if one exists) by key\n"),t("code",[e._v("0x0")]),e._v(" and if a "),t("code",[e._v("Plan")]),e._v(' is marked as "done" by key '),t("code",[e._v("0x1")]),e._v(". The state\ncontains the consensus versions of all app modules in the application. The versions\nare stored as big endian "),t("code",[e._v("uint64")]),e._v(", and can be accessed with prefix "),t("code",[e._v("0x2")]),e._v(" appended\nby the corresponding module name of type "),t("code",[e._v("string")]),e._v(". The state maintains a\n"),t("code",[e._v("Protocol Version")]),e._v(" which can be accessed by key "),t("code",[e._v("0x3")]),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("Plan: "),t("code",[e._v("0x0 -> Plan")])]),e._v(" "),t("li",[e._v("Done: "),t("code",[e._v("0x1 | byte(plan name) -> BigEndian(Block Height)")])]),e._v(" "),t("li",[e._v("ConsensusVersion: "),t("code",[e._v("0x2 | byte(module name) -> BigEndian(Module Consensus Version)")])]),e._v(" "),t("li",[e._v("ProtocolVersion: "),t("code",[e._v("0x3 -> BigEndian(Protocol Version)")])])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/upgrade")]),e._v(" module contains no genesis state.")])])}),[],!1,null,null,null);n.default=a.exports}}]);