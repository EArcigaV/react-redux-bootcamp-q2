import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      {
        id: 12,
        name: "BRAVIA XR Z9K 8K HDR Mini LED TV with smart Google TV (2022)",
        price: 6999.99,
        description:
          "\nProduct highlights\n• Intelligent TV processing technology with Cognitive Processor XR that delivers natural and realistic picture quality.\n• Thousands of Mini LEDs are precisely controlled by XR Backlight Master Drive for unprecedented contrast and maximum brightness.\n• Billions of accurate colors deliver natural and beautiful picture quality, enhanced by XR Triluminos Pro.\n• Google TV with Google Assistant organizes your content all in one place.1 Stream from your Apple device with AirPlay 2 support.14\n• Enjoy streaming high-quality 4K UHD quality movies included with the BRAVIA CORE app.2\n• Experience immersive cinematic content with support for Dolby Vision4, IMAX Enhanced5, and Netflix Adaptive Calibrated Mode6.\n• Every seat is the best seat with wide viewing angles that preserves color and an anti-reflective screen to reduce glare.\n• Take your gaming to the next level with input lag as low as 8.5ms and BRAVIA XR exclusive features for the PlayStation®5.7\n• Get the advantage in high-performance gaming with 4K/120,10 VRR,11 ALLM as specified in HDMI 2.1.\n• Hear true immersive audio with four sound positioning frame tweeters in addition to front-firing TV speakers and dual subwoofers, plus support for Dolby Atmos.\n• Acoustic Center Sync synchronizes BRAVIA XR TVs speakers with select Sony soundbars to reinforce the center speaker channel for fuller, more immersive sound.\n• See blur-free picture quality in fast-moving sports and movies powered by XR Motion Clarity technology.\n• Bring back lost texture and detail and see your content upscaled to near-4K resolution with XR 4K Upscaling.12\n• Multi-position stand offering three variations – low-profile immersive setting, narrow furniture setting, raised to accommodate a soundbar.15\n• With the included BRAVIA CAM, video chat on the big screen and allow Ambient Optimization Pro to automatically adjust picture and sound according to your room environment.16\n• Redesigned premium, compact backlit remote with metallic finish and finder function to easily find if misplaced.\n",
        images: [
          "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision%2FBRAVIA+LCD+HDTV%2FFY+22%2FZ9K%2F1-Z9K+85-BRAVIA+XR-FRNT-D2C-1208x1053.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uJTJGQlJBVklBK0xDRCtIRFRWJTJGRlkrMjIlMkZaOUslMkYxLVo5Sys4NS1CUkFWSUErWFItRlJOVC1EMkMtMTIwOHgxMDUzLnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=Fs5YpgROeicE1hXiyM0QvFfTpppQQ-pogpQOr5YMGXQJQQ3OepB8F5rLoQ60Zk~KvmEVLcQrMD00nJrHSZNCGeKPwyMSkyiH9coezirda5y6safBFyZ4YbHPQopgB3CcL8XsaxdfASXRLzQp80DR9Hz5W7V7nMLk55y5MjoPdQDSBTzEhbpCeijtr95NaGqQG5NSiFKx-JRC2kHTqZO3smQU~GNC5D~EFCu-a00bysYt12ImZQrUTjB7Cbp8m~7UHVjPii4pedIsja-7-Df~SgEy7HIMyAX1qOKaabo7EbOFwDwHM9wsI-oYzWh7eg899QLsWPENVvZyqO4dRTHQpw__&Key-Pair-Id=K37BLT9C6HMMJ0",
          "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision+%28Assets%29%2FBRAVIA%C3%82%C2%AE+LCD+HDTV%2FFY+22%2FZ9K%2F2-Z9K+85-US+Google-CCW-D2C-1208x1053.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uKyUyOEFzc2V0cyUyOSUyRkJSQVZJQSVDMyU4MiVDMiVBRStMQ0QrSERUViUyRkZZKzIyJTJGWjlLJTJGMi1aOUsrODUtVVMrR29vZ2xlLUNDVy1EMkMtMTIwOHgxMDUzLnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=RPTFSczyc1EQGXGLhk6LWNjvfwPjbIewrGLnrj~4WirO-K-adVvdQMB6MpyIyA6r4I9szbe-RwcUDj-bELFzaqMmSKFMtFf0wKluHJ1o2~oIBeI4wcY~r1rCh3Ayh7VMNv9VzNvFXCsioul2bB~NXKucb2CKUKrXKshHaTZFGxcKdQc5qORPG-gn-ZmWOei0Tp50z7~C3Ci-Vq3ZrLboulT1XxtVfeKg15ogzgzmQuA7RQfT9F7QduPkWYa6jOaWwmAAExBrRnizVoQKyEjAtGXfuL9FXlDedZX7QcbiuSUrqppNFehY7G9SblC4CYbNWBllasfoNY6L46RJHzQy9g__&Key-Pair-Id=K37BLT9C6HMMJ0",
          "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision+%28Assets%29%2FBRAVIA%C3%82%C2%AE+LCD+HDTV%2FFY+22%2FZ9K%2F3-+Back.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uKyUyOEFzc2V0cyUyOSUyRkJSQVZJQSVDMyU4MiVDMiVBRStMQ0QrSERUViUyRkZZKzIyJTJGWjlLJTJGMy0rQmFjay5wbmcucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ1NzYyMDAwfX19XX0_&Signature=P2DWCRrqt13Orh441tBMLQuccv5m2lbE~Mrdgavv1OQcClQAk3tBuxuJFInuTbJuNSLPPHjRuYg1ZXSXytkqYH767vPaGq856YMrXHTrM7zbBX06UGrJ1VS1Q3lFAzS9HOlUMl9cyccgNgjRZNLHK-YuvMD9mardPJpiBllNUkmuIr4EMRJdKYrIku~g6rcj2gvA6V4oAaKTJ8DNnQ2y1Q0PtCyDue4N~CxFBHFYeQ4Mxc6O9n945oHXldS5ELc-UcHwlW6QDbd8sShC1onqkNKCiMvjuKpbQQmSK4AsOp~-YfnA3FNKEaeAioyjehMxIfRmgZgOIXbr8aQHWkr47w__&Key-Pair-Id=K37BLT9C6HMMJ0",
        ],
        categories: ["Television & video"],
      },
      {
        id: 17,
        name: "Roku TV 4700 series 4K UltraHD LED RokuTV",
        price: 3000,
        description:
          " 4K UltraHD RokuTV\n• More than a smart TV - a better TV\n• Bring your TV experience to a whole new level\n• 120 PMR delivers unprecedented motion sharpness to your TV\n• Fast and easy search across top channels\n• Free Roku mobile app for iOS and Android",
        images: [
          "https://images.philips.com/is/image/PhilipsConsumer/75PFL4756_F7-IMS-en_US?wid=420&hei=360&$jpglarge$",
          "https://images.philips.com/is/image/PhilipsConsumer/75PFL4756_F7-DPP-global-001?$jpglarge$&wid=420&hei=360",
          "https://images.philips.com/is/image/PhilipsConsumer/75PFL4756_F7-RTP-global-001?$jpglarge$&wid=420&hei=360",
        ],
        categories: ["Television & video"],
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload.product);
    },
    remove: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      state.products.splice(index, 1);
    },

    reset: (state, action) => {
      state.products = [];
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;
