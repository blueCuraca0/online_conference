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
import { GoogleIcon } from "components/icons/GoogleIcon";
import { AppleIcon } from "components/icons/AppleIcon";
import { EyeIcon } from "components/icons/EyeIcon";
import { EyeOffIcon } from "components/icons/EyeOffIcon";
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
        {/* <Box sx={styles.socialButtons}>
          <Box sx={styles.socialButton} onClick={handleGoogleSignIn}>
            <GoogleIcon />
            <Typography variant="buttonText">{t("googleButton")}</Typography>
          </Box>
          <Box sx={styles.socialButton} onClick={handleAppleSignIn}>
            <AppleIcon />
            <Typography variant="buttonText">{t("appleButton")}</Typography>
          </Box>
        </Box> */}

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

          {/* <Box sx={styles.checkboxRow}>
            <Checkbox sx={styles.checkbox} {...register("rememberDevice")} />
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("rememberDevice")}
            </Typography>
          </Box> */}

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

export default SignInPanel;
