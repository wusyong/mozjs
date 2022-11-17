/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#[allow(unused_extern_crates)]
extern crate encoding_c;
#[allow(unused_extern_crates)]
extern crate encoding_c_mem;
extern crate libc;
#[allow(unused_extern_crates)]
extern crate libz_sys;

// The jsimpls module just implements traits so can be private
mod jsimpls;

// Modules with public definitions
pub mod jsgc;
pub mod jsid;
pub mod jsval;

// Reexport the bindings in the jsapi module
pub use generated::root as jsapi;

// The bindings generated by bindgen
#[doc(hidden)]
mod generated {
    include!(concat!(env!("OUT_DIR"), "/build/jsapi.rs"));
}

fn panic_hook(info: &std::panic::PanicInfo) {
    panic!("{}", info);
}

/// Configure a panic hook to redirect rust panics to MFBT's MOZ_Crash.
/// See https://searchfox.org/mozilla-central/rev/2bdaa395cb841b28f8ef74882a61df5efeedb42b/mozglue/static/rust/lib.rs#99-103
#[no_mangle]
pub extern "C" fn install_rust_panic_hook() {
    std::panic::set_hook(Box::new(panic_hook));
}

#[cfg(feature = "oom_with_hook")]
mod oom_hook {
    use std::alloc::{set_alloc_error_hook, Layout};

    extern "C" {
        fn RustHandleOOM(size: usize) -> !;
    }

    pub fn hook(layout: Layout) {
        unsafe {
            RustHandleOOM(layout.size());
        }
    }

    pub fn install() {
        set_alloc_error_hook(hook);
    }
}

// See https://searchfox.org/mozilla-central/rev/2bdaa395cb841b28f8ef74882a61df5efeedb42b/mozglue/static/rust/lib.rs#105-128
#[no_mangle]
pub extern "C" fn install_rust_oom_hook() {
    #[cfg(feature = "oom_with_hook")]
    oom_hook::install();
}
