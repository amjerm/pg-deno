import { assertEquals } from "https://deno.land/std@0.196.0/testing/asserts.ts";
import { getHighestProbability } from "./nationalize_integration.ts";

Deno.test("getHighestProbability function", async (t) => {
  await t.step("handles a single item", () => {
    const input = [
      {
        country_id: "CI",
        probability: 0.35,
      },
    ];

    assertEquals(getHighestProbability(input), input[0]);
  });

  await t.step("finds first item", async () => {
    const testCases = [
      {
        name: "with two",
        input: [
          {
            country_id: "CI",
            probability: 0.35,
          },
          {
            country_id: "US",
            probability: 0.25,
          },
        ],
        expected: {
          country_id: "CI",
          probability: 0.35,
        },
      },
      {
        name: "with three",
        input: [
          {
            country_id: "CI",
            probability: 0.35,
          },
          {
            country_id: "US",
            probability: 0.25,
          },
          {
            country_id: "CA",
            probability: 0.3,
          },
        ],
        expected: {
          country_id: "CI",
          probability: 0.35,
        },
      },
    ];

    await Promise.all(
      testCases.map((testCase) => async () => {
        const { name, input, expected } = testCase;
        await t.step(name, () => {
          assertEquals(getHighestProbability(input), expected);
        });
      })
    );
  });

  await t.step("finds second item", async () => {
    const testCases = [
      {
        name: "with two",
        input: [
          {
            country_id: "CI",
            probability: 0.35,
          },
          {
            country_id: "US",
            probability: 0.45,
          },
        ],
        expected: {
          country_id: "CI",
          probability: 0.35,
        },
      },
      {
        name: "with three",
        input: [
          {
            country_id: "CI",
            probability: 0.35,
          },
          {
            country_id: "US",
            probability: 0.45,
          },
          {
            country_id: "CA",
            probability: 0.3,
          },
        ],
        expected: {
          country_id: "CI",
          probability: 0.35,
        },
      },
    ];

    await Promise.all(
      testCases.map((testCase) => async () => {
        const { name, input, expected } = testCase;
        await t.step(name, () => {
          assertEquals(getHighestProbability(input), expected);
        });
      })
    );
  });
});
