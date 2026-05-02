import { FC, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { TextField } from "ui/TextField";
import { Checkbox } from "ui/Checkbox";
import { Button } from "components/Button";
import Logo from "components/Logo";
import { basicTheme } from "theme";
import { styles } from "./styles";
import { useSignInController } from "./controller";

interface SignInFormValues {
  email: string;
  password: string;
  rememberDevice: boolean;
}

const SignInPanel: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loading, claims, authError, handleSignIn } = useSignInController();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: { email: "", password: "", rememberDevice: false },
  });

  useEffect(() => {
    if (claims) navigate("/home");
  }, [claims, navigate]);

  const onSubmit = async ({ email, password }: SignInFormValues) => {
    await handleSignIn(email, password);
  };

  const handleGoogleSignIn = () => {
    // TODO: OAuth Google flow
  };

  const handleAppleSignIn = () => {
    // TODO: OAuth Apple flow
  };

  const handleForgotPassword = () => {
    // TODO: navigate to forgot-password page
  };

  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  return (
    <Box sx={styles.root}>
      {/* Logo */}
      <Box sx={styles.logoRow}>
        <Box sx={styles.logoIconBox}>
          <Logo style={{ position: "static", width: 28, height: 28, top: "unset", left: "unset" }} />
        </Box>
        <Typography variant="h3" color={basicTheme.palette.accentPalette.text}>
          {t("appName")}
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={styles.content}>
        <Box sx={styles.titleBlock}>
          <Typography variant="h6" color={basicTheme.palette.accentPalette.text}>
            {t("welcomeTitle")}
          </Typography>
          <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
            {t("welcomeSubtitle")}
          </Typography>
        </Box>

        {/* Social sign-in */}
        <Box sx={styles.socialButtons}>
          <Box sx={styles.socialButton} onClick={handleGoogleSignIn}>
            <GoogleIcon />
            <Typography variant="buttonText">{t("googleButton")}</Typography>
          </Box>
          <Box sx={styles.socialButton} onClick={handleAppleSignIn}>
            <AppleIcon />
            <Typography variant="buttonText">{t("appleButton")}</Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={styles.dividerRow}>
          <Box sx={styles.dividerLine} />
          <Typography
            variant="caption"
            sx={{ color: "#9E9880", letterSpacing: "0.08em", whiteSpace: "nowrap" }}
          >
            {t("orContinueWithEmail")}
          </Typography>
          <Box sx={styles.dividerLine} />
        </Box>

        {/* Form */}
        <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {authError && (
            <Typography variant="caption" sx={{ color: "#E84F4F" }}>
              {authError}
            </Typography>
          )}

          <Box sx={styles.fieldBlock}>
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("emailLabel")}
            </Typography>
            <TextField
              fullWidth
              placeholder={t("emailPlaceholder")}
              sx={styles.textField}
              {...register("email")}
            />
          </Box>

          <Box sx={styles.fieldBlock}>
            <Box sx={styles.passwordLabel}>
              <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
                {t("passwordLabel")}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: basicTheme.palette.mainPalette.primary, cursor: "pointer" }}
                onClick={handleForgotPassword}
              >
                {t("forgotPassword")}
              </Typography>
            </Box>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              sx={styles.textField}
              InputProps={{
                endAdornment: (
                  <Box
                    component="span"
                    onClick={() => setShowPassword((v) => !v)}
                    sx={{ cursor: "pointer", display: "flex", color: "#9E9880" }}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </Box>
                ),
              }}
              {...register("password")}
            />
          </Box>

          <Box sx={styles.checkboxRow}>
            <Checkbox sx={styles.checkbox} {...register("rememberDevice")} />
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("rememberDevice")}
            </Typography>
          </Box>

          <Button
            type="submit"
            disabled={loading}
            buttonTitle={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                  {loading ? "…" : t("signInButton")}
                </Typography>
                {!loading && (
                  <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                    →
                  </Typography>
                )}
              </Box>
            }
            sx={styles.signInButton}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={styles.footer}>
        <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
          {t("newToConfly")}{" "}
          <Box
            component="span"
            onClick={handleCreateAccount}
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              color: basicTheme.palette.accentPalette.text,
            }}
          >
            {t("createAccount")}
          </Box>
        </Typography>
        <Box sx={styles.footerMeta}>
          <Typography variant="caption" sx={{ color: "#9E9880" }}>
            {t("copyright")}
          </Typography>
          <Typography variant="caption" sx={{ color: "#9E9880" }}>
            {t("version")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const GoogleIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
    <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05" />
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
  </svg>
);

const AppleIcon: FC = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.544 9.558c-.022-2.178 1.782-3.229 1.864-3.28-1.018-1.487-2.598-1.69-3.155-1.71-1.337-.136-2.614.794-3.293.794-.679 0-1.718-.775-2.824-.754-1.447.021-2.786.848-3.527 2.145C.79 9.35 1.875 13.62 3.669 15.95c.888 1.272 1.942 2.698 3.321 2.648 1.337-.052 1.84-.854 3.454-.854 1.614 0 2.073.854 3.474.826 1.44-.024 2.35-1.294 3.226-2.572.022-.014-3.578-1.44-3.6-4.44zM11.248 2.987c.736-.895 1.234-2.138 1.098-3.379-1.061.043-2.35.707-3.11 1.602-.683.79-1.278 2.048-1.117 3.256 1.183.091 2.392-.601 3.129-1.479z" fill="#000" />
  </svg>
);

const EyeIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default SignInPanel;
