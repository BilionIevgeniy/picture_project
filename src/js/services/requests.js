const postData = async (url, data) => {
  // let res = await fetch(url, {
  //     method: "POST",
  //     body: data
  // });
  let promise = new Promise((resolve, rej) => {
    setTimeout(() => {
      const localData = data;
      rej({
        status: 200,
        text: () => Promise.resolve(localData),
      });
    }, 2000);
  });

  let res;
  try {
    res = await promise;
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  const textData = await res.text();

  return Object.fromEntries(textData.entries());
};

const getResource = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export { postData, getResource };
