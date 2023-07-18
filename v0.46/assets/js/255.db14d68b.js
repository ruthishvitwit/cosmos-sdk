(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{776:function(e,d,a){"use strict";a.r(d);var t=a(1),l=Object(t.a)({},(function(){var e=this,d=e.$createElement,a=e._self._c||d;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("h2",{attrs:{id:"pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pool"}},[e._v("#")]),e._v(" Pool")]),e._v(" "),a("p",[e._v("Pool is used for tracking bonded and not-bonded token supply of the bond denomination.")]),e._v(" "),a("h2",{attrs:{id:"lasttotalpower"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lasttotalpower"}},[e._v("#")]),e._v(" LastTotalPower")]),e._v(" "),a("p",[e._v('LastTotalPower tracks the total amounts of bonded tokens recorded during the previous end block.\nStore entries prefixed with "Last" must remain unchanged until EndBlock.')]),e._v(" "),a("ul",[a("li",[e._v("LastTotalPower: "),a("code",[e._v("0x12 -> ProtocolBuffer(math.Int)")])])]),e._v(" "),a("h2",{attrs:{id:"params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[e._v("#")]),e._v(" Params")]),e._v(" "),a("p",[e._v("Params is a module-wide configuration structure that stores system parameters\nand defines overall functioning of the staking module.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGFyYW1zIGRlZmluZXMgdGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBzdGFraW5nIG1vZHVsZS4KbWVzc2FnZSBQYXJhbXMgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgID0gdHJ1ZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX3N0cmluZ2VyKSA9IGZhbHNlOwoKICAvLyB1bmJvbmRpbmdfdGltZSBpcyB0aGUgdGltZSBkdXJhdGlvbiBvZiB1bmJvbmRpbmcuCiAgZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uIHVuYm9uZGluZ190aW1lID0gMSBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5zdGRkdXJhdGlvbikgPSB0cnVlXTsKICAvLyBtYXhfdmFsaWRhdG9ycyBpcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdmFsaWRhdG9ycy4KICB1aW50MzIgbWF4X3ZhbGlkYXRvcnMgPSAyOwogIC8vIG1heF9lbnRyaWVzIGlzIHRoZSBtYXggZW50cmllcyBmb3IgZWl0aGVyIHVuYm9uZGluZyBkZWxlZ2F0aW9uIG9yIHJlZGVsZWdhdGlvbiAocGVyIHBhaXIvdHJpbykuCiAgdWludDMyIG1heF9lbnRyaWVzID0gMzsKICAvLyBoaXN0b3JpY2FsX2VudHJpZXMgaXMgdGhlIG51bWJlciBvZiBoaXN0b3JpY2FsIGVudHJpZXMgdG8gcGVyc2lzdC4KICB1aW50MzIgaGlzdG9yaWNhbF9lbnRyaWVzID0gNDsKICAvLyBib25kX2Rlbm9tIGRlZmluZXMgdGhlIGJvbmRhYmxlIGNvaW4gZGVub21pbmF0aW9uLgogIHN0cmluZyBib25kX2Rlbm9tID0gNTsKICAvLyBtaW5fY29tbWlzc2lvbl9yYXRlIGlzIHRoZSBjaGFpbi13aWRlIG1pbmltdW0gY29tbWlzc2lvbiByYXRlIHRoYXQgYSB2YWxpZGF0b3IgY2FuIGNoYXJnZSB0aGVpciBkZWxlZ2F0b3JzCiAgc3RyaW5nIG1pbl9jb21taXNzaW9uX3JhdGUgPSA2IFsKICAgIChnb2dvcHJvdG8ubW9yZXRhZ3MpICAgPSAmcXVvdDt5YW1sOlwmcXVvdDttaW5fY29tbWlzc2lvbl9yYXRlXCZxdW90OyZxdW90OywKICAgIChnb2dvcHJvdG8uY3VzdG9tdHlwZSkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkRlYyZxdW90OywKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpICAgPSBmYWxzZQogIF07Cn0="}})],1),e._v(" "),a("h2",{attrs:{id:"validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),a("p",[e._v("Validators can have one of three statuses")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Unbonded")]),e._v(": The validator is not in the active set. They cannot sign blocks and do not earn\nrewards. They can receive delegations.")]),e._v(" "),a("li",[a("code",[e._v("Bonded")]),e._v(": Once the validator receives sufficient bonded tokens they automtically join the\nactive set during "),a("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html#validator-set-changes"}},[a("code",[e._v("EndBlock")])]),e._v(" and their status is updated to "),a("code",[e._v("Bonded")]),e._v(".\nThey are signing blocks and receiving rewards. They can receive further delegations.\nThey can be slashed for misbehavior. Delegators to this validator who unbond their delegation\nmust wait the duration of the UnbondingTime, a chain-specific param, during which time\nthey are still slashable for offences of the source validator if those offences were committed\nduring the period of time that the tokens were bonded.")],1),e._v(" "),a("li",[a("code",[e._v("Unbonding")]),e._v(": When a validator leaves the active set, either by choice or due to slashing, jailing or\ntombstoning, an unbonding of all their delegations begins. All delegations must then wait the UnbondingTime\nbefore their tokens are moved to their accounts from the "),a("code",[e._v("BondedPool")]),e._v(".")])]),e._v(" "),a("p",[e._v("Validators objects should be primarily stored and accessed by the\n"),a("code",[e._v("OperatorAddr")]),e._v(", an SDK validator address for the operator of the validator. Two\nadditional indices are maintained per validator object in order to fulfill\nrequired lookups for slashing and validator-set updates. A third special index\n("),a("code",[e._v("LastValidatorPower")]),e._v(") is also maintained which however remains constant\nthroughout each block, unlike the first two indices which mirror the validator\nrecords within a block.")]),e._v(" "),a("ul",[a("li",[e._v("Validators: "),a("code",[e._v("0x21 | OperatorAddrLen (1 byte) | OperatorAddr -> ProtocolBuffer(validator)")])]),e._v(" "),a("li",[e._v("ValidatorsByConsAddr: "),a("code",[e._v("0x22 | ConsAddrLen (1 byte) | ConsAddr -> OperatorAddr")])]),e._v(" "),a("li",[e._v("ValidatorsByPower: "),a("code",[e._v("0x23 | BigEndian(ConsensusPower) | OperatorAddrLen (1 byte) | OperatorAddr -> OperatorAddr")])]),e._v(" "),a("li",[e._v("LastValidatorsPower: "),a("code",[e._v("0x11 | OperatorAddrLen (1 byte) | OperatorAddr -> ProtocolBuffer(ConsensusPower)")])])]),e._v(" "),a("p",[a("code",[e._v("Validators")]),e._v(" is the primary index - it ensures that each operator can have only one\nassociated validator, where the public key of that validator can change in the\nfuture. Delegators can refer to the immutable operator of the validator, without\nconcern for the changing public key.")]),e._v(" "),a("p",[a("code",[e._v("ValidatorByConsAddr")]),e._v(" is an additional index that enables lookups for slashing.\nWhen Tendermint reports evidence, it provides the validator address, so this\nmap is needed to find the operator. Note that the "),a("code",[e._v("ConsAddr")]),e._v(" corresponds to the\naddress which can be derived from the validator's "),a("code",[e._v("ConsPubKey")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("ValidatorsByPower")]),e._v(" is an additional index that provides a sorted list of\npotential validators to quickly determine the current active set. Here\nConsensusPower is validator.Tokens/10^6 by default. Note that all validators\nwhere "),a("code",[e._v("Jailed")]),e._v(" is true are not stored within this index.")]),e._v(" "),a("p",[a("code",[e._v("LastValidatorsPower")]),e._v(" is a special index that provides a historical list of the\nlast-block's bonded validators. This index remains constant during a block but\nis updated during the validator set update process which takes place in "),a("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html"}},[a("code",[e._v("EndBlock")])]),e._v(".")],1),e._v(" "),a("p",[e._v("Each validator's state is stored in a "),a("code",[e._v("Validator")]),e._v(" struct:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVmFsaWRhdG9yIGRlZmluZXMgYSB2YWxpZGF0b3IsIHRvZ2V0aGVyIHdpdGggdGhlIHRvdGFsIGFtb3VudCBvZiB0aGUKLy8gVmFsaWRhdG9yJ3MgYm9uZCBzaGFyZXMgYW5kIHRoZWlyIGV4Y2hhbmdlIHJhdGUgdG8gY29pbnMuIFNsYXNoaW5nIHJlc3VsdHMgaW4KLy8gYSBkZWNyZWFzZSBpbiB0aGUgZXhjaGFuZ2UgcmF0ZSwgYWxsb3dpbmcgY29ycmVjdCBjYWxjdWxhdGlvbiBvZiBmdXR1cmUKLy8gdW5kZWxlZ2F0aW9ucyB3aXRob3V0IGl0ZXJhdGluZyBvdmVyIGRlbGVnYXRvcnMuIFdoZW4gY29pbnMgYXJlIGRlbGVnYXRlZCB0bwovLyB0aGlzIHZhbGlkYXRvciwgdGhlIHZhbGlkYXRvciBpcyBjcmVkaXRlZCB3aXRoIGEgZGVsZWdhdGlvbiB3aG9zZSBudW1iZXIgb2YKLy8gYm9uZCBzaGFyZXMgaXMgYmFzZWQgb24gdGhlIGFtb3VudCBvZiBjb2lucyBkZWxlZ2F0ZWQgZGl2aWRlZCBieSB0aGUgY3VycmVudAovLyBleGNoYW5nZSByYXRlLiBWb3RpbmcgcG93ZXIgY2FuIGJlIGNhbGN1bGF0ZWQgYXMgdG90YWwgYm9uZGVkIHNoYXJlcwovLyBtdWx0aXBsaWVkIGJ5IGV4Y2hhbmdlIHJhdGUuCm1lc3NhZ2UgVmFsaWRhdG9yIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSAgPSBmYWxzZTsKCiAgLy8gb3BlcmF0b3JfYWRkcmVzcyBkZWZpbmVzIHRoZSBhZGRyZXNzIG9mIHRoZSB2YWxpZGF0b3IncyBvcGVyYXRvcjsgYmVjaCBlbmNvZGVkIGluIEpTT04uCiAgc3RyaW5nIG9wZXJhdG9yX2FkZHJlc3MgPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CiAgLy8gY29uc2Vuc3VzX3B1YmtleSBpcyB0aGUgY29uc2Vuc3VzIHB1YmxpYyBrZXkgb2YgdGhlIHZhbGlkYXRvciwgYXMgYSBQcm90b2J1ZiBBbnkuCiAgZ29vZ2xlLnByb3RvYnVmLkFueSBjb25zZW5zdXNfcHVia2V5ID0gMiBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuY3J5cHRvLlB1YktleSZxdW90O107CiAgLy8gamFpbGVkIGRlZmluZWQgd2hldGhlciB0aGUgdmFsaWRhdG9yIGhhcyBiZWVuIGphaWxlZCBmcm9tIGJvbmRlZCBzdGF0dXMgb3Igbm90LgogIGJvb2wgamFpbGVkID0gMzsKICAvLyBzdGF0dXMgaXMgdGhlIHZhbGlkYXRvciBzdGF0dXMgKGJvbmRlZC91bmJvbmRpbmcvdW5ib25kZWQpLgogIEJvbmRTdGF0dXMgc3RhdHVzID0gNDsKICAvLyB0b2tlbnMgZGVmaW5lIHRoZSBkZWxlZ2F0ZWQgdG9rZW5zIChpbmNsLiBzZWxmLWRlbGVnYXRpb24pLgogIHN0cmluZyB0b2tlbnMgPSA1IFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuSW50JnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKICAvLyBkZWxlZ2F0b3Jfc2hhcmVzIGRlZmluZXMgdG90YWwgc2hhcmVzIGlzc3VlZCB0byBhIHZhbGlkYXRvcidzIGRlbGVnYXRvcnMuCiAgc3RyaW5nIGRlbGVnYXRvcl9zaGFyZXMgPSA2IFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKICAvLyBkZXNjcmlwdGlvbiBkZWZpbmVzIHRoZSBkZXNjcmlwdGlvbiB0ZXJtcyBmb3IgdGhlIHZhbGlkYXRvci4KICBEZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiA9IDcgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIC8vIHVuYm9uZGluZ19oZWlnaHQgZGVmaW5lcywgaWYgdW5ib25kaW5nLCB0aGUgaGVpZ2h0IGF0IHdoaWNoIHRoaXMgdmFsaWRhdG9yIGhhcyBiZWd1biB1bmJvbmRpbmcuCiAgaW50NjQgdW5ib25kaW5nX2hlaWdodCA9IDg7CiAgLy8gdW5ib25kaW5nX3RpbWUgZGVmaW5lcywgaWYgdW5ib25kaW5nLCB0aGUgbWluIHRpbWUgZm9yIHRoZSB2YWxpZGF0b3IgdG8gY29tcGxldGUgdW5ib25kaW5nLgogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgdW5ib25kaW5nX3RpbWUgPSA5IFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZV07CiAgLy8gY29tbWlzc2lvbiBkZWZpbmVzIHRoZSBjb21taXNzaW9uIHBhcmFtZXRlcnMuCiAgQ29tbWlzc2lvbiBjb21taXNzaW9uID0gMTAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIC8vIG1pbl9zZWxmX2RlbGVnYXRpb24gaXMgdGhlIHZhbGlkYXRvcidzIHNlbGYgZGVjbGFyZWQgbWluaW11bSBzZWxmIGRlbGVnYXRpb24uCiAgLy8KICAvLyBTaW5jZTogY29zbW9zLXNkayAwLjQ2CiAgc3RyaW5nIG1pbl9zZWxmX2RlbGVnYXRpb24gPSAxMSBbCiAgICAoY29zbW9zX3Byb3RvLnNjYWxhcikgID0gJnF1b3Q7Y29zbW9zLkludCZxdW90OywKICAgIChnb2dvcHJvdG8uY3VzdG9tdHlwZSkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OywKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpICAgPSBmYWxzZQogIF07Cn0="}})],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQ29tbWlzc2lvblJhdGVzIGRlZmluZXMgdGhlIGluaXRpYWwgY29tbWlzc2lvbiByYXRlcyB0byBiZSB1c2VkIGZvciBjcmVhdGluZwovLyBhIHZhbGlkYXRvci4KbWVzc2FnZSBDb21taXNzaW9uUmF0ZXMgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgID0gdHJ1ZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX3N0cmluZ2VyKSA9IGZhbHNlOwoKICAvLyByYXRlIGlzIHRoZSBjb21taXNzaW9uIHJhdGUgY2hhcmdlZCB0byBkZWxlZ2F0b3JzLCBhcyBhIGZyYWN0aW9uLgogIHN0cmluZyByYXRlID0gMSBbCiAgICAoY29zbW9zX3Byb3RvLnNjYWxhcikgID0gJnF1b3Q7Y29zbW9zLkRlYyZxdW90OywKICAgIChnb2dvcHJvdG8uY3VzdG9tdHlwZSkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkRlYyZxdW90OywKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpICAgPSBmYWxzZQogIF07CiAgLy8gbWF4X3JhdGUgZGVmaW5lcyB0aGUgbWF4aW11bSBjb21taXNzaW9uIHJhdGUgd2hpY2ggdmFsaWRhdG9yIGNhbiBldmVyIGNoYXJnZSwgYXMgYSBmcmFjdGlvbi4KICBzdHJpbmcgbWF4X3JhdGUgPSAyIFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKICAvLyBtYXhfY2hhbmdlX3JhdGUgZGVmaW5lcyB0aGUgbWF4aW11bSBkYWlseSBpbmNyZWFzZSBvZiB0aGUgdmFsaWRhdG9yIGNvbW1pc3Npb24sIGFzIGEgZnJhY3Rpb24uCiAgc3RyaW5nIG1heF9jaGFuZ2VfcmF0ZSA9IDMgWwogICAgKGNvc21vc19wcm90by5zY2FsYXIpICA9ICZxdW90O2Nvc21vcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgID0gZmFsc2UKICBdOwp9CgovLyBDb21taXNzaW9uIGRlZmluZXMgY29tbWlzc2lvbiBwYXJhbWV0ZXJzIGZvciBhIGdpdmVuIHZhbGlkYXRvci4KbWVzc2FnZSBDb21taXNzaW9uIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IHRydWU7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKCiAgLy8gY29tbWlzc2lvbl9yYXRlcyBkZWZpbmVzIHRoZSBpbml0aWFsIGNvbW1pc3Npb24gcmF0ZXMgdG8gYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSB2YWxpZGF0b3IuCiAgQ29tbWlzc2lvblJhdGVzIGNvbW1pc3Npb25fcmF0ZXMgPSAxIFsoZ29nb3Byb3RvLmVtYmVkKSA9IHRydWUsIChnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIC8vIHVwZGF0ZV90aW1lIGlzIHRoZSBsYXN0IHRpbWUgdGhlIGNvbW1pc3Npb24gcmF0ZSB3YXMgY2hhbmdlZC4KICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIHVwZGF0ZV90aW1lID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWVdOwp9CgovLyBEZXNjcmlwdGlvbiBkZWZpbmVzIGEgdmFsaWRhdG9yIGRlc2NyaXB0aW9uLgptZXNzYWdlIERlc2NyaXB0aW9uIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IHRydWU7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKCiAgLy8gbW9uaWtlciBkZWZpbmVzIGEgaHVtYW4tcmVhZGFibGUgbmFtZSBmb3IgdGhlIHZhbGlkYXRvci4KICBzdHJpbmcgbW9uaWtlciA9IDE7CiAgLy8gaWRlbnRpdHkgZGVmaW5lcyBhbiBvcHRpb25hbCBpZGVudGl0eSBzaWduYXR1cmUgKGV4LiBVUG9ydCBvciBLZXliYXNlKS4KICBzdHJpbmcgaWRlbnRpdHkgPSAyOwogIC8vIHdlYnNpdGUgZGVmaW5lcyBhbiBvcHRpb25hbCB3ZWJzaXRlIGxpbmsuCiAgc3RyaW5nIHdlYnNpdGUgPSAzOwogIC8vIHNlY3VyaXR5X2NvbnRhY3QgZGVmaW5lcyBhbiBvcHRpb25hbCBlbWFpbCBmb3Igc2VjdXJpdHkgY29udGFjdC4KICBzdHJpbmcgc2VjdXJpdHlfY29udGFjdCA9IDQ7CiAgLy8gZGV0YWlscyBkZWZpbmUgb3RoZXIgb3B0aW9uYWwgZGV0YWlscy4KICBzdHJpbmcgZGV0YWlscyA9IDU7Cn0="}})],1),e._v(" "),a("h2",{attrs:{id:"delegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegation"}},[e._v("#")]),e._v(" Delegation")]),e._v(" "),a("p",[e._v("Delegations are identified by combining "),a("code",[e._v("DelegatorAddr")]),e._v(" (the address of the delegator)\nwith the "),a("code",[e._v("ValidatorAddr")]),e._v(" Delegators are indexed in the store as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Delegation: "),a("code",[e._v("0x31 | DelegatorAddrLen (1 byte) | DelegatorAddr | ValidatorAddrLen (1 byte) | ValidatorAddr -> ProtocolBuffer(delegation)")])])]),e._v(" "),a("p",[e._v("Stake holders may delegate coins to validators; under this circumstance their\nfunds are held in a "),a("code",[e._v("Delegation")]),e._v(" data structure. It is owned by one\ndelegator, and is associated with the shares for one validator. The sender of\nthe transaction is the owner of the bond.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRGVsZWdhdGlvbiByZXByZXNlbnRzIHRoZSBib25kIHdpdGggdG9rZW5zIGhlbGQgYnkgYW4gYWNjb3VudC4gSXQgaXMKLy8gb3duZWQgYnkgb25lIGRlbGVnYXRvciwgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdm90aW5nIHBvd2VyIG9mIG9uZQovLyB2YWxpZGF0b3IuCm1lc3NhZ2UgRGVsZWdhdGlvbiB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIC8vIGRlbGVnYXRvcl9hZGRyZXNzIGlzIHRoZSBiZWNoMzItZW5jb2RlZCBhZGRyZXNzIG9mIHRoZSBkZWxlZ2F0b3IuCiAgc3RyaW5nIGRlbGVnYXRvcl9hZGRyZXNzID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIHZhbGlkYXRvcl9hZGRyZXNzIGlzIHRoZSBiZWNoMzItZW5jb2RlZCBhZGRyZXNzIG9mIHRoZSB2YWxpZGF0b3IuCiAgc3RyaW5nIHZhbGlkYXRvcl9hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIHNoYXJlcyBkZWZpbmUgdGhlIGRlbGVnYXRpb24gc2hhcmVzIHJlY2VpdmVkLgogIHN0cmluZyBzaGFyZXMgPSAzIFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKfQ=="}})],1),e._v(" "),a("h3",{attrs:{id:"delegator-shares"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegator-shares"}},[e._v("#")]),e._v(" Delegator Shares")]),e._v(" "),a("p",[e._v("When one Delegates tokens to a Validator they are issued a number of delegator shares based on a\ndynamic exchange rate, calculated as follows from the total number of tokens delegated to the\nvalidator and the number of shares issued so far:")]),e._v(" "),a("p",[a("code",[e._v("Shares per Token = validator.TotalShares() / validator.Tokens()")])]),e._v(" "),a("p",[e._v("Only the number of shares received is stored on the DelegationEntry. When a delegator then\nUndelegates, the token amount they receive is calculated from the number of shares they currently\nhold and the inverse exchange rate:")]),e._v(" "),a("p",[a("code",[e._v("Tokens per Share = validator.Tokens() / validatorShares()")])]),e._v(" "),a("p",[e._v("These "),a("code",[e._v("Shares")]),e._v(" are simply an accounting mechanism. They are not a fungible asset. The reason for\nthis mechanism is to simplify the accounting around slashing. Rather than iteratively slashing the\ntokens of every delegation entry, instead the Validators total bonded tokens can be slashed,\neffectively reducing the value of each issued delegator share.")]),e._v(" "),a("h2",{attrs:{id:"unbondingdelegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbondingdelegation"}},[e._v("#")]),e._v(" UnbondingDelegation")]),e._v(" "),a("p",[e._v("Shares in a "),a("code",[e._v("Delegation")]),e._v(" can be unbonded, but they must for some time exist as\nan "),a("code",[e._v("UnbondingDelegation")]),e._v(", where shares can be reduced if Byzantine behavior is\ndetected.")]),e._v(" "),a("p",[a("code",[e._v("UnbondingDelegation")]),e._v(" are indexed in the store as:")]),e._v(" "),a("ul",[a("li",[e._v("UnbondingDelegation: "),a("code",[e._v("0x32 | DelegatorAddrLen (1 byte) | DelegatorAddr | ValidatorAddrLen (1 byte) | ValidatorAddr -> ProtocolBuffer(unbondingDelegation)")])]),e._v(" "),a("li",[e._v("UnbondingDelegationsFromValidator: "),a("code",[e._v("0x33 | ValidatorAddrLen (1 byte) | ValidatorAddr | DelegatorAddrLen (1 byte) | DelegatorAddr -> nil")])])]),e._v(" "),a("p",[e._v("The first map here is used in queries, to lookup all unbonding delegations for\na given delegator, while the second map is used in slashing, to lookup all\nunbonding delegations associated with a given validator that need to be\nslashed.")]),e._v(" "),a("p",[e._v("A UnbondingDelegation object is created every time an unbonding is initiated.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVW5ib25kaW5nRGVsZWdhdGlvbiBzdG9yZXMgYWxsIG9mIGEgc2luZ2xlIGRlbGVnYXRvcidzIHVuYm9uZGluZyBib25kcwovLyBmb3IgYSBzaW5nbGUgdmFsaWRhdG9yIGluIGFuIHRpbWUtb3JkZXJlZCBsaXN0LgptZXNzYWdlIFVuYm9uZGluZ0RlbGVnYXRpb24gewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX3N0cmluZ2VyKSA9IGZhbHNlOwoKICAvLyBkZWxlZ2F0b3JfYWRkcmVzcyBpcyB0aGUgYmVjaDMyLWVuY29kZWQgYWRkcmVzcyBvZiB0aGUgZGVsZWdhdG9yLgogIHN0cmluZyBkZWxlZ2F0b3JfYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICAvLyB2YWxpZGF0b3JfYWRkcmVzcyBpcyB0aGUgYmVjaDMyLWVuY29kZWQgYWRkcmVzcyBvZiB0aGUgdmFsaWRhdG9yLgogIHN0cmluZyB2YWxpZGF0b3JfYWRkcmVzcyA9IDIgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICAvLyBlbnRyaWVzIGFyZSB0aGUgdW5ib25kaW5nIGRlbGVnYXRpb24gZW50cmllcy4KICByZXBlYXRlZCBVbmJvbmRpbmdEZWxlZ2F0aW9uRW50cnkgZW50cmllcyA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOyAvLyB1bmJvbmRpbmcgZGVsZWdhdGlvbiBlbnRyaWVzCn0="}})],1),e._v(" "),a("h2",{attrs:{id:"redelegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redelegation"}},[e._v("#")]),e._v(" Redelegation")]),e._v(" "),a("p",[e._v("The bonded tokens worth of a "),a("code",[e._v("Delegation")]),e._v(" may be instantly redelegated from a\nsource validator to a different validator (destination validator). However when\nthis occurs they must be tracked in a "),a("code",[e._v("Redelegation")]),e._v(" object, whereby their\nshares can be slashed if their tokens have contributed to a Byzantine fault\ncommitted by the source validator.")]),e._v(" "),a("p",[a("code",[e._v("Redelegation")]),e._v(" are indexed in the store as:")]),e._v(" "),a("ul",[a("li",[e._v("Redelegations: "),a("code",[e._v("0x34 | DelegatorAddrLen (1 byte) | DelegatorAddr | ValidatorAddrLen (1 byte) | ValidatorSrcAddr | ValidatorDstAddr -> ProtocolBuffer(redelegation)")])]),e._v(" "),a("li",[e._v("RedelegationsBySrc: "),a("code",[e._v("0x35 | ValidatorSrcAddrLen (1 byte) | ValidatorSrcAddr | ValidatorDstAddrLen (1 byte) | ValidatorDstAddr | DelegatorAddrLen (1 byte) | DelegatorAddr -> nil")])]),e._v(" "),a("li",[e._v("RedelegationsByDst: "),a("code",[e._v("0x36 | ValidatorDstAddrLen (1 byte) | ValidatorDstAddr | ValidatorSrcAddrLen (1 byte) | ValidatorSrcAddr | DelegatorAddrLen (1 byte) | DelegatorAddr -> nil")])])]),e._v(" "),a("p",[e._v("The first map here is used for queries, to lookup all redelegations for a given\ndelegator. The second map is used for slashing based on the "),a("code",[e._v("ValidatorSrcAddr")]),e._v(",\nwhile the third map is for slashing based on the "),a("code",[e._v("ValidatorDstAddr")]),e._v(".")]),e._v(" "),a("p",[e._v('A redelegation object is created every time a redelegation occurs. To prevent\n"redelegation hopping" redelegations may not occur under the situation that:')]),e._v(" "),a("ul",[a("li",[e._v("the (re)delegator already has another immature redelegation in progress\nwith a destination to a validator (let's call it "),a("code",[e._v("Validator X")]),e._v(")")]),e._v(" "),a("li",[e._v("and, the (re)delegator is attempting to create a "),a("em",[e._v("new")]),e._v(" redelegation\nwhere the source validator for this new redelegation is "),a("code",[e._v("Validator X")]),e._v(".")])]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUmVkZWxlZ2F0aW9uRW50cnkgZGVmaW5lcyBhIHJlZGVsZWdhdGlvbiBvYmplY3Qgd2l0aCByZWxldmFudCBtZXRhZGF0YS4KbWVzc2FnZSBSZWRlbGVnYXRpb25FbnRyeSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSB0cnVlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIC8vIGNyZWF0aW9uX2hlaWdodCAgZGVmaW5lcyB0aGUgaGVpZ2h0IHdoaWNoIHRoZSByZWRlbGVnYXRpb24gdG9vayBwbGFjZS4KICBpbnQ2NCBjcmVhdGlvbl9oZWlnaHQgPSAxOwogIC8vIGNvbXBsZXRpb25fdGltZSBkZWZpbmVzIHRoZSB1bml4IHRpbWUgZm9yIHJlZGVsZWdhdGlvbiBjb21wbGV0aW9uLgogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgY29tcGxldGlvbl90aW1lID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWVdOwogIC8vIGluaXRpYWxfYmFsYW5jZSBkZWZpbmVzIHRoZSBpbml0aWFsIGJhbGFuY2Ugd2hlbiByZWRlbGVnYXRpb24gc3RhcnRlZC4KICBzdHJpbmcgaW5pdGlhbF9iYWxhbmNlID0gMyBbCiAgICAoY29zbW9zX3Byb3RvLnNjYWxhcikgID0gJnF1b3Q7Y29zbW9zLkludCZxdW90OywKICAgIChnb2dvcHJvdG8uY3VzdG9tdHlwZSkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OywKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpICAgPSBmYWxzZQogIF07CiAgLy8gc2hhcmVzX2RzdCBpcyB0aGUgYW1vdW50IG9mIGRlc3RpbmF0aW9uLXZhbGlkYXRvciBzaGFyZXMgY3JlYXRlZCBieSByZWRlbGVnYXRpb24uCiAgc3RyaW5nIHNoYXJlc19kc3QgPSA0IFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKfQoKLy8gUmVkZWxlZ2F0aW9uIGNvbnRhaW5zIHRoZSBsaXN0IG9mIGEgcGFydGljdWxhciBkZWxlZ2F0b3IncyByZWRlbGVnYXRpbmcgYm9uZHMKLy8gZnJvbSBhIHBhcnRpY3VsYXIgc291cmNlIHZhbGlkYXRvciB0byBhIHBhcnRpY3VsYXIgZGVzdGluYXRpb24gdmFsaWRhdG9yLgptZXNzYWdlIFJlZGVsZWdhdGlvbiB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIC8vIGRlbGVnYXRvcl9hZGRyZXNzIGlzIHRoZSBiZWNoMzItZW5jb2RlZCBhZGRyZXNzIG9mIHRoZSBkZWxlZ2F0b3IuCiAgc3RyaW5nIGRlbGVnYXRvcl9hZGRyZXNzID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIHZhbGlkYXRvcl9zcmNfYWRkcmVzcyBpcyB0aGUgdmFsaWRhdG9yIHJlZGVsZWdhdGlvbiBzb3VyY2Ugb3BlcmF0b3IgYWRkcmVzcy4KICBzdHJpbmcgdmFsaWRhdG9yX3NyY19hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIHZhbGlkYXRvcl9kc3RfYWRkcmVzcyBpcyB0aGUgdmFsaWRhdG9yIHJlZGVsZWdhdGlvbiBkZXN0aW5hdGlvbiBvcGVyYXRvciBhZGRyZXNzLgogIHN0cmluZyB2YWxpZGF0b3JfZHN0X2FkZHJlc3MgPSAzIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CiAgLy8gZW50cmllcyBhcmUgdGhlIHJlZGVsZWdhdGlvbiBlbnRyaWVzLgogIHJlcGVhdGVkIFJlZGVsZWdhdGlvbkVudHJ5IGVudHJpZXMgPSA0IFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsgLy8gcmVkZWxlZ2F0aW9uIGVudHJpZXMKfQ=="}})],1),e._v(" "),a("h2",{attrs:{id:"queues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),a("p",[e._v("All queues objects are sorted by timestamp. The time used within any queue is\nfirst rounded to the nearest nanosecond then sorted. The sortable time format\nused is a slight modification of the RFC3339Nano and uses the format string\n"),a("code",[e._v('"2006-01-02T15:04:05.000000000"')]),e._v(". Notably this format:")]),e._v(" "),a("ul",[a("li",[e._v("right pads all zeros")]),e._v(" "),a("li",[e._v("drops the time zone info (uses UTC)")])]),e._v(" "),a("p",[e._v("In all cases, the stored timestamp represents the maturation time of the queue\nelement.")]),e._v(" "),a("h3",{attrs:{id:"unbondingdelegationqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbondingdelegationqueue"}},[e._v("#")]),e._v(" UnbondingDelegationQueue")]),e._v(" "),a("p",[e._v("For the purpose of tracking progress of unbonding delegations the unbonding\ndelegations queue is kept.")]),e._v(" "),a("ul",[a("li",[e._v("UnbondingDelegation: "),a("code",[e._v("0x41 | format(time) -> []DVPair")])])]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRFZQYWlyIGlzIHN0cnVjdCB0aGF0IGp1c3QgaGFzIGEgZGVsZWdhdG9yLXZhbGlkYXRvciBwYWlyIHdpdGggbm8gb3RoZXIgZGF0YS4KLy8gSXQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIG1hcnNoYWxhYmxlIHBvaW50ZXIuIEZvciBleGFtcGxlLCBhIERWUGFpciBjYW4KLy8gYmUgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIGtleSB0byBnZXR0aW5nIGFuIFVuYm9uZGluZ0RlbGVnYXRpb24gZnJvbSBzdGF0ZS4KbWVzc2FnZSBEVlBhaXIgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX3N0cmluZ2VyKSA9IGZhbHNlOwoKICBzdHJpbmcgZGVsZWdhdG9yX2FkZHJlc3MgPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CiAgc3RyaW5nIHZhbGlkYXRvcl9hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwp9"}})],1),e._v(" "),a("h3",{attrs:{id:"redelegationqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redelegationqueue"}},[e._v("#")]),e._v(" RedelegationQueue")]),e._v(" "),a("p",[e._v("For the purpose of tracking progress of redelegations the redelegation queue is\nkept.")]),e._v(" "),a("ul",[a("li",[e._v("RedelegationQueue: "),a("code",[e._v("0x42 | format(time) -> []DVVTriplet")])])]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRFZWVHJpcGxldCBpcyBzdHJ1Y3QgdGhhdCBqdXN0IGhhcyBhIGRlbGVnYXRvci12YWxpZGF0b3ItdmFsaWRhdG9yIHRyaXBsZXQKLy8gd2l0aCBubyBvdGhlciBkYXRhLiBJdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgbWFyc2hhbGFibGUgcG9pbnRlci4gRm9yCi8vIGV4YW1wbGUsIGEgRFZWVHJpcGxldCBjYW4gYmUgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIGtleSB0byBnZXR0aW5nIGEKLy8gUmVkZWxlZ2F0aW9uIGZyb20gc3RhdGUuCm1lc3NhZ2UgRFZWVHJpcGxldCB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZXF1YWwpICAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CgogIHN0cmluZyBkZWxlZ2F0b3JfYWRkcmVzcyAgICAgPSAxIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CiAgc3RyaW5nIHZhbGlkYXRvcl9zcmNfYWRkcmVzcyA9IDIgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICBzdHJpbmcgdmFsaWRhdG9yX2RzdF9hZGRyZXNzID0gMyBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOw=="}})],1),e._v(" "),a("h3",{attrs:{id:"validatorqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validatorqueue"}},[e._v("#")]),e._v(" ValidatorQueue")]),e._v(" "),a("p",[e._v("For the purpose of tracking progress of unbonding validators the validator\nqueue is kept.")]),e._v(" "),a("ul",[a("li",[e._v("ValidatorQueueTime: "),a("code",[e._v("0x43 | format(time) -> []sdk.ValAddress")])])]),e._v(" "),a("p",[e._v("The stored object as each key is an array of validator operator addresses from\nwhich the validator object can be accessed. Typically it is expected that only\na single validator record will be associated with a given timestamp however it is possible\nthat multiple validators exist in the queue at the same location.")]),e._v(" "),a("h2",{attrs:{id:"historicalinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#historicalinfo"}},[e._v("#")]),e._v(" HistoricalInfo")]),e._v(" "),a("p",[e._v("HistoricalInfo objects are stored and pruned at each block such that the staking keeper persists\nthe "),a("code",[e._v("n")]),e._v(" most recent historical info defined by staking module parameter: "),a("code",[e._v("HistoricalEntries")]),e._v(".")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gSGlzdG9yaWNhbEluZm8gY29udGFpbnMgaGVhZGVyIGFuZCB2YWxpZGF0b3IgaW5mb3JtYXRpb24gZm9yIGEgZ2l2ZW4gYmxvY2suCi8vIEl0IGlzIHN0b3JlZCBhcyBwYXJ0IG9mIHN0YWtpbmcgbW9kdWxlJ3Mgc3RhdGUsIHdoaWNoIHBlcnNpc3RzIHRoZSBgbmAgbW9zdAovLyByZWNlbnQgSGlzdG9yaWNhbEluZm8KLy8gKGBuYCBpcyBzZXQgYnkgdGhlIHN0YWtpbmcgbW9kdWxlJ3MgYGhpc3RvcmljYWxfZW50cmllc2AgcGFyYW1ldGVyKS4KbWVzc2FnZSBIaXN0b3JpY2FsSW5mbyB7CiAgdGVuZGVybWludC50eXBlcy5IZWFkZXIgaGVhZGVyID0gMSBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CiAgcmVwZWF0ZWQgVmFsaWRhdG9yICAgICAgdmFsc2V0ID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),a("p",[e._v("At each BeginBlock, the staking keeper will persist the current Header and the Validators that committed\nthe current block in a "),a("code",[e._v("HistoricalInfo")]),e._v(" object. The Validators are sorted on their address to ensure that\nthey are in a determisnistic order.\nThe oldest HistoricalEntries will be pruned to ensure that there only exist the parameter-defined number of\nhistorical entries.")])])}),[],!1,null,null,null);d.default=l.exports}}]);