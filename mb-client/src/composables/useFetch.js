import { ref, unref } from "vue";

const BASE_URL = "http://localhost:3000";

export const STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};

// usually when I create this composable, I also add the retry functionality.
// I didn't add it here, because it doesn't make sense for this use case
export default function useFetch({
  endpoint,
  body = ref({}),
  method,
  init = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
}) {
  let load;
  const data = ref({});
  const status = ref();
  const errors = ref({});

  load = () => {
    errors.value = {};
    status.value = STATUS.PENDING;

    fetch(`${BASE_URL}${endpoint}`, {
      ...init,
      method,
      body: init.body ?? JSON.stringify(unref(body)),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errData) => {
            throw {
              status: res.status,
              message: "API failed",
              body: errData,
            };
          });
        } else {
          return res.json();
        }
      })
      .then((jsonData = {}) => {
        status.value = STATUS.SUCCESS;
        data.value = jsonData;
      })
      .catch((err) => {
        status.value = STATUS.ERROR;
        errors.value = err.body;
      });
  };

  return { status, load, errors, data };
}
