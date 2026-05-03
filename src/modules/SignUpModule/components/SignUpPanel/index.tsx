import { FC, useState } from "react";

import { SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { TextField } from "ui/TextField";
import { Checkbox } from "ui/Checkbox";
import { Button } from "components/Button";
import Logo from "components/Logo";
import { EyeIcon } from "components/icons/EyeIcon";
import { EyeOffIcon } from "components/icons/EyeOffIcon";
import { basicTheme } from "theme";
import { styles } from "./styles";
import { useSignUpController } from "./controller";

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreedToTerms: boolean;
}

const OTP_LENGTH = 8;
const STEP_KEYS = ["stepAccount", "stepWorkspace", "stepDevices"] as const;

const scorePassword = (password: string): number => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 14) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const STRENGTH_COLORS = ["#E0D9CC", "#E84F4F", "#F2AB16", "#99AD7A", "#546B41"];

const SignUpPanel: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const currentStep = 1;
  const { loading, authError, otpSent, signUpSuccess, pendingEmail, handleSignUp, handleVerifyOtp } = useSignUpController();
  const [otp, setOtp] = useState("");

  const { register, handleSubmit, control } = useForm<SignUpFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreedToTerms: false,
    },
  });

  const password = useWatch({ control, name: "password" });
  const filled = scorePassword(password);
  const strengthLabels = ["", t("strengthWeak"), t("strengthFair"), t("strengthGood"), t("strengthStrong")];
  const strengthLabel = strengthLabels[filled] ?? "";

  const steps = STEP_KEYS.map((key, i) => ({ label: t(key), step: i + 1 }));

  const onSubmit = async ({ email, password: pw, firstName, lastName }: SignUpFormValues) => {
    await handleSignUp(email, pw, firstName, lastName);
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleTermsClick = () => {
    // TODO: open Terms of Service
  };

  const handlePrivacyClick = () => {
    // TODO: open Privacy Notice
  };

  const logoRow = (
    <Box sx={styles.logoRow}>
      <Box sx={styles.logoIconBox}>
        <Logo style={{ position: "static", width: 28, height: 28, top: "unset", left: "unset" }} />
      </Box>
      <Typography variant="h3" color={basicTheme.palette.accentPalette.text}>
        {t("appName")}
      </Typography>
    </Box>
  );

  if (signUpSuccess) {
    return (
      <Box sx={styles.root}>
        {logoRow}
        <Box sx={styles.content}>
          <Box sx={styles.titleBlock}>
            <Typography variant="h6" color={basicTheme.palette.accentPalette.text}>
              {t("otpSuccessTitle")}
            </Typography>
            <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
              {t("otpSuccessSubtitle")}
            </Typography>
          </Box>
          <Button
            buttonTitle={
              <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                {t("continueButton")}
              </Typography>
            }
            sx={styles.continueButton}
            onClick={() => navigate("/home")}
          />
        </Box>
      </Box>
    );
  }

  if (otpSent) {
    return (
      <Box sx={styles.root}>
        {logoRow}
        <Box sx={styles.content}>
          <Box sx={styles.titleBlock}>
            <Typography variant="h6" color={basicTheme.palette.accentPalette.text}>
              {t("otpTitle")}
            </Typography>
            <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
              {t("otpSubtitle")} <strong>{pendingEmail}</strong>
            </Typography>
          </Box>
          <Box sx={styles.form}>
            {authError && (
              <Typography variant="caption" sx={{ color: "#E84F4F" }}>
                {authError}
              </Typography>
            )}
            <Box sx={styles.fieldBlock}>
              <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
                {t("otpLabel")}
              </Typography>
              <TextField
                fullWidth
                placeholder={t("otpPlaceholder")}
                sx={styles.textField}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH))}
                inputProps={{ maxLength: OTP_LENGTH, inputMode: "numeric" }}
              />
            </Box>
            <Button
              disabled={loading || otp.length < OTP_LENGTH}
              buttonTitle={
                <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                  {loading ? "…" : t("otpVerifyButton")}
                </Typography>
              }
              sx={styles.continueButton}
              onClick={() => handleVerifyOtp(otp)}
            />
          </Box>
          <Box sx={styles.footer}>
            <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
              {t("alreadyHaveOne")}{" "}
              <Box component="span" onClick={handleSignIn} sx={styles.footerLink}>
                {t("signInLink")}
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.root}>
      {logoRow}

      {/* Main content */}
      <Box sx={styles.content}>
        {/* Step indicator */}
        <Box sx={styles.stepsRow}>
          {steps.map((s, i) => {
            const isActive = s.step === currentStep;
            const isComplete = s.step < currentStep;
            return (
              <Box key={s.step} sx={styles.stepItem}>
                {i > 0 && <Box sx={styles.stepConnector} />}
                <Box sx={isActive || isComplete ? styles.stepCircleActive : styles.stepCircleInactive}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: isActive || isComplete
                        ? basicTheme.palette.mainPalette.white
                        : "#C8C4B0",
                    }}
                  >
                    {s.step}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isActive ? 700 : 400,
                    color: isActive
                      ? basicTheme.palette.accentPalette.text
                      : "#9E9880",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Title */}
        <Box sx={styles.titleBlock}>
          <Typography variant="h6" color={basicTheme.palette.accentPalette.text}>
            {t("signUpTitle")}
          </Typography>
          <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
            {t("signUpSubtitle")}
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {authError && (
            <Typography variant="caption" sx={{ color: "#E84F4F" }}>
              {authError}
            </Typography>
          )}
          {/* Name row */}
          <Box sx={styles.nameRow}>
            <Box sx={{ ...styles.fieldBlock, ...styles.nameField } as SxProps}>
              <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
                {t("firstNameLabel")}
              </Typography>
              <TextField
                fullWidth
                placeholder={t("firstNamePlaceholder")}
                sx={styles.textField}
                {...register("firstName")}
              />
            </Box>
            <Box sx={{ ...styles.fieldBlock, ...styles.nameField } as SxProps}>
              <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
                {t("lastNameLabel")}
              </Typography>
              <TextField
                fullWidth
                placeholder={t("lastNamePlaceholder")}
                sx={styles.textField}
                {...register("lastName")}
              />
            </Box>
          </Box>

          {/* Work email */}
          <Box sx={styles.fieldBlock}>
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("workEmailLabel")}
            </Typography>
            <TextField
              fullWidth
              placeholder={t("workEmailPlaceholder")}
              sx={styles.textField}
              {...register("email")}
            />
          </Box>

          {/* Password */}
          <Box sx={styles.passwordStrengthRow}>
            <Box sx={styles.fieldBlock}>
              <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
                {t("passwordLabel")}
              </Typography>
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

            {/* Strength indicator */}
            {password?.length > 0 && (
              <>
                <Box sx={styles.strengthBars}>
                  {[1, 2, 3, 4].map((bar) => (
                    <Box
                      key={bar}
                      sx={{
                        ...styles.strengthBar,
                        bgcolor: bar <= filled ? STRENGTH_COLORS[filled] : "#E0D9CC",
                      }}
                    />
                  ))}
                </Box>
                <Box sx={styles.strengthMeta}>
                  <Typography variant="caption" sx={{ color: "#9E9880" }}>
                    {t("passwordHint")}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: STRENGTH_COLORS[filled], fontWeight: 600 }}
                  >
                    {strengthLabel}
                  </Typography>
                </Box>
              </>
            )}
          </Box>

          {/* Terms checkbox */}
          <Box sx={styles.checkboxRow}>
            <Checkbox sx={styles.checkbox} {...register("agreedToTerms")} />
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("termsPrefix")}{" "}
              <Box
                component="span"
                onClick={handleTermsClick}
                sx={{ fontWeight: 700, cursor: "pointer" }}
              >
                {t("termsLink")}
              </Box>{" "}
              {t("termsAnd")}{" "}
              <Box
                component="span"
                onClick={handlePrivacyClick}
                sx={{ fontWeight: 700, cursor: "pointer" }}
              >
                {t("privacyLink")}
              </Box>
              {t("termsSuffix")}
            </Typography>
          </Box>

          <Button
            type="submit"
            disabled={loading}
            buttonTitle={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                  {loading ? "…" : t("continueButton")}
                </Typography>
                {!loading && (
                  <Typography variant="buttonText" color={basicTheme.palette.mainPalette.white}>
                    →
                  </Typography>
                )}
              </Box>
            }
            sx={styles.continueButton}
          />
        </Box>

        {/* Sign in link */}
        <Box sx={styles.footer}>
          <Typography variant="bodyText" color={basicTheme.palette.accentPalette.text}>
            {t("alreadyHaveOne")}{" "}
            <Box component="span" onClick={handleSignIn} sx={styles.footerLink}>
              {t("signInLink")}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPanel;
