import {
  Html,
  Body,
  Container,
  Text,
  Button,
  Hr,
  Row,
  Column,
  Section,
} from "@react-email/components";

export function WithdrawalRequestEmail({
  interviewerName,
  interviewerEmail,
  credits,
  platformFee,
  netAmount,
  paymentMethod,
  paymentDetail,
  reviewUrl,
}) {
  const rows = [
    ["Credits", credits, false],
    ["Platform fee (20%)", `− $${platformFee.toFixed(2)}`, false],
    ["Method", paymentMethod, false],
    ["Send to", paymentDetail, false],
  ];

  return (
    <Html>
      <Body style={{ fontFamily: "Inter, Helvetica, Arial, sans-serif", backgroundColor: "#f5f5f4", padding: "32px 16px" }}>
        <Container style={{ maxWidth: "480px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb" }}>

          {/* Header */}
          <Section style={{ backgroundColor: "#9810fa", padding: "24px 32px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "600", color: "#ffffff", margin: "0 0 4px" }}>
              Prepflow
            </Text>
            <Text style={{ fontSize: "11px", color: "#d99dff", margin: "0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Withdrawal Request
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ padding: "28px 32px" }}>
            <Text style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 20px", lineHeight: "1.6" }}>
              <strong style={{ color: "#111827" }}>{interviewerName}</strong>{" "}
              ({interviewerEmail}) has requested a withdrawal.
            </Text>

            {/* Breakdown card */}
            <Section style={{ backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #e5e7eb", overflow: "hidden", marginBottom: "24px" }}>

              {/* Card header */}
              <Row style={{ backgroundColor: "#f5e6ff", borderBottom: "1px solid #e0b3ff", padding: "8px 16px" }}>
                <Column>
                  <Text style={{ fontSize: "11px", fontWeight: "600", color: "#6b00b3", margin: "0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Payout breakdown
                  </Text>
                </Column>
              </Row>

              {/* Regular rows */}
              {rows.map(([label, value]) => (
                <Row key={label} style={{ borderBottom: "1px solid #f3f4f6", padding: "10px 16px" }}>
                  <Column><Text style={{ fontSize: "13px", color: "#6b7280", margin: "0" }}>{label}</Text></Column>
                  <Column style={{ textAlign: "right" }}>
                    <Text style={{ fontSize: "13px", color: label === "Platform fee (20%)" ? "#A32D2D" : "#111827", fontWeight: "500", margin: "0" }}>
                      {value}
                    </Text>
                  </Column>
                </Row>
              ))}

              {/* Net payout row */}
              <Row style={{ backgroundColor: "#f5e6ff", padding: "12px 16px" }}>
                <Column><Text style={{ fontSize: "14px", fontWeight: "600", color: "#6b00b3", margin: "0" }}>Net payout</Text></Column>
                <Column style={{ textAlign: "right" }}>
                  <Text style={{ fontSize: "16px", fontWeight: "700", color: "#9810fa", margin: "0" }}>
                    ${netAmount.toFixed(2)}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* CTA */}
            <Button
              href={reviewUrl}
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: "#9810fa",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "600",
                padding: "13px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              Review &amp; Approve →
            </Button>

            <Text style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", margin: "20px 0 0", lineHeight: "1.5" }}>
              This request was submitted automatically. Only approve if you recognise this withdrawal.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}