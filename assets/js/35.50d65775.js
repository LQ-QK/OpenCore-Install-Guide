(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{501:function(e,t,r){e.exports=r.p+"assets/img/base-efi.4dff73e0.png"},502:function(e,t,r){e.exports=r.p+"assets/img/clean-efi.5f36d3ad.png"},503:function(e,t,r){e.exports=r.p+"assets/img/populated-efi.bfd59122.png"},583:function(e,t,r){"use strict";r.r(t);var o=r(25),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adding-the-base-opencore-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-base-opencore-files"}},[e._v("#")]),e._v(" Adding The Base OpenCore Files")]),e._v(" "),o("ul",[o("li",[e._v("Supported version: 0.5.9")])]),e._v(" "),o("p",[e._v("To setup OpenCore’s folder structure, you’ll want to grab the EFI folder found in "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg's releases"),o("OutboundLink")],1),e._v(" and place it on the root of your EFI partition")]),e._v(" "),o("ul",[o("li",[e._v("Windows users: This will already be done on the "),o("code",[e._v("BOOT")]),e._v(" USB drive created by MakeInstall")]),e._v(" "),o("li",[e._v("Linux users: This is the "),o("code",[e._v("OPENCORE")]),e._v(" partition we created earlier\n"),o("ul",[o("li",[e._v("Note that Method 1 only creates 1 partition, while Method 2 creates 2 partitions")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:r(501),alt:"base EFI folder"}})]),e._v(" "),o("p",[e._v("Now something you'll notice is that it comes with a bunch of files in "),o("code",[e._v("Drivers")]),e._v(" and "),o("code",[e._v("Tools")]),e._v(" folder, we don't want most of these:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Remove from Drivers:")])]),e._v(" "),o("ul",[o("li",[e._v("AudioDxe.efi\n"),o("ul",[o("li",[e._v("Unrelated to Audio support in macOS")])])]),e._v(" "),o("li",[e._v("CrScreenshotDxe.efi\n"),o("ul",[o("li",[e._v("Used for taking screenshots in UEFI, not needed by us")])])]),e._v(" "),o("li",[e._v("OpenUsbKbDxe.efi\n"),o("ul",[o("li",[e._v("Used for OpenCore picker on "),o("strong",[e._v("legacy systems running DuetPkg")]),e._v(", "),o("a",{attrs:{href:"https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653",target:"_blank",rel:"noopener noreferrer"}},[e._v("not recommended and even harmful on Ivy Bridge and newer"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("UsbMouseDxe.efi\n"),o("ul",[o("li",[e._v("similar idea to OpenUsbKbDxe, should only be needed on legacy systems using DuetPkg")])])]),e._v(" "),o("li",[e._v("NvmExpressDxe.efi\n"),o("ul",[o("li",[e._v("Used for Haswell and older when no NVMe driver is built into the firmware")])])]),e._v(" "),o("li",[e._v("XhciDxe.efi\n"),o("ul",[o("li",[e._v("Used for Sandy Bridge and older when no XHCI driver is built into the firmware")])])]),e._v(" "),o("li",[e._v("HiiDatabase.efi\n"),o("ul",[o("li",[e._v("Used for fixing GUI support like OpenShell.efi on Sandy Bridge and older")])])]),e._v(" "),o("li",[e._v("OpenCanopy.efi\n"),o("ul",[o("li",[e._v("This is OpenCore's optional GUI, we'll be going over how to set this up in "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Post Install"),o("OutboundLink")],1),e._v(" so remove this for now")])])]),e._v(" "),o("li",[e._v("Ps2KeyboardDxe.efi + Ps2MouseDxe.efi\n"),o("ul",[o("li",[e._v("Pretty obvious when you need this, USB keyboard and mouse users don't need it")]),e._v(" "),o("li",[e._v("Reminder: PS2 ≠ USB")])])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Remove everything from Tools:")])]),e._v(" "),o("ul",[o("li",[e._v("Way to many to list them all, but I recommend keeping OpenShell.efi for troubleshooting purposes")])])])]),e._v(" "),o("p",[e._v("A cleaned up EFI:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(502),alt:"Clean EFI"}})]),e._v(" "),o("p",[e._v("Now you can place "),o("strong",[e._v("your")]),e._v(" necessary firmware drivers(.efi) into the "),o("em",[e._v("Drivers")]),e._v(" folder and Kexts/ACPI into their respective folders. Please note that UEFI drivers from Clover are not supported with OpenCore!(EmuVariableUEFI, AptioMemoryFix, OsxAptioFixDrv, etc). Please see the "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion/clover-efi.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover firmware driver conversion"),o("OutboundLink")],1),e._v(" for more info on supported drivers and those merged into OpenCore.")]),e._v(" "),o("p",[e._v("Here's what a populated EFI "),o("em",[o("strong",[e._v("can")])]),e._v(" look like (yours will be different):")]),e._v(" "),o("p",[o("img",{attrs:{src:r(503),alt:"Populated EFI folder"}})]),e._v(" "),o("p",[o("strong",[e._v("Reminder")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("SSDTs and custom DSDTs("),o("code",[e._v(".aml")]),e._v(") go in ACPI folder")]),e._v(" "),o("li",[e._v("Kexts("),o("code",[e._v(".kext")]),e._v(") go in Kexts folder")]),e._v(" "),o("li",[e._v("Firmware drivers("),o("code",[e._v(".efi")]),e._v(") go in the Drivers folder")])]),e._v(" "),o("h1",{attrs:{id:"now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[e._v("#")]),e._v(" Now with all this done, head to "),o("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("Gathering Files")]),e._v(" to get the needed kexts and firmware drivers")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);