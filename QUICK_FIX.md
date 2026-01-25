# QUICK FIX - Add These Sections to page.js

## Problem Identified

The pitch deck is missing:

1. Unit Economics section (showing CAC/LTV data)
2. Competitive Analysis table
3. Detailed revenue breakdown with charts
4. Developer recruitment section

## SOLUTION: Insert these sections NOW

### 1. After line 251 (Market Opportunity title), add chart image:

```jsx
{
  /* Market Visualization */
}
<div className={styles.chartContainer}>
  <img
    src="/images/market-opportunity-funnel.png"
    alt="Market Opportunity"
    style={{
      maxWidth: "700px",
      width: "100%",
      margin: "2rem auto",
      display: "block",
      borderRadius: "12px",
    }}
  />
</div>;
```

### 2. After line 443 (after business model closing </section>), INSERT UNIT ECONOMICS:

```jsx
{
  /* UNIT ECONOMICS */
}
<section
  className={styles.section}
  style={{ background: "rgba(124, 58, 237, 0.05)" }}
>
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className={styles.sectionTitle}>
        <BarChart3 className={styles.icon} />
        Unit Economics - Proven Model
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            $15-25
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>CAC</h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Customer Acquisition Cost
          </p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            $180-240
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>LTV</h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Lifetime Value (3 years)
          </p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            7-12x
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            LTV:CAC
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            World-class ratio
          </p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            85%
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Margin</h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Gross margin</p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            5-8%
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Conversion
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Free → Premium</p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            18mo
          </div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Retention
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Average customer stay
          </p>
        </div>
      </div>

      {/* Revenue Pie Chart */}
      <div style={{ marginTop: "4rem" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          Revenue Breakdown
        </h3>
        <img
          src="/images/revenue-pie-chart.png"
          alt="Revenue Streams"
          style={{
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
            display: "block",
            borderRadius: "12px",
          }}
        />
      </div>
    </motion.div>
  </div>
</section>;
```

### 3. After line 352 (after competitive advantage), INSERT COMPETITIVE TABLE:

```jsx
{
  /* COMPETITIVE ANALYSIS TABLE */
}
<section className={styles.section}>
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className={styles.sectionTitle}>
        <Globe className={styles.icon} />
        Competitive Analysis
      </h2>

      <div style={{ overflowX: "auto", marginTop: "2rem" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "12px",
          }}
        >
          <thead>
            <tr style={{ background: "rgba(124, 58, 237, 0.2)" }}>
              <th
                style={{
                  padding: "1rem",
                  textAlign: "left",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Feature
              </th>
              <th
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Scripture Apps
              </th>
              <th
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Astrology
              </th>
              <th
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Generic AI
              </th>
              <th
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.3)",
                }}
              >
                MALOLA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Digital Scriptures
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ✅
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Audio Library
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Partial
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                AI Chatbot
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Generic
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅ Cultural
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Voice AI
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Partial
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Astrology
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Manual
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅ AI
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Soul Matching
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅ Unique
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Physical Books
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                ❌
              </td>
              <td
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(124, 58, 237, 0.2)",
                  fontWeight: 700,
                }}
              >
                ✅ Unique
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
</section>;
```

This will immediately fix the missing sections and show proper structured data!
